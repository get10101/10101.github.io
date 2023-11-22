---
slug: dlc-to-lightning-part-3
title: Bringing DLCs to Lightning Part 3
authors: [richard, lucas]
tags: [DLC, lightning, knowledge-base]
---

This is the third and last part of the series on how to bring DLCs to Lightning.
Check out the first two blog posts if you haven't already.

- [Part 1](https://10101.finance/blog/dlc-to-lightning-part-1): A quick overview of Lightning, Adaptor Signatures and DLCs.
- [Part 2](https://10101.finance/blog/dlc-to-lightning-part-2): Discusses an approach of expanding the commitment transaction with a custom output.

![](/2023-08-29-bringing-dlc-to-lightning-part-3/bitcoin_struck_by_lightning.png)

In part 3, we are going to show you how 10101 is utilizing virtual channels to bring DLCs to Lightning.

## DLC Channel

In order to bring DLCs to Lightning we have to firstly bring them off-chain.
_(Note, we have done this in the past at ItchySats[^1])_
That is so that we do not have to go on-chain directly after a DLC has been been expired (after the oracle attested to the outcome of an event) or renewed.

A simple approach would be to make the CETs revocable, but that can't be done without putting the side revoking first at a disadvantage.
The counterparty could then choose to publish the CETs from the previous or the current contract while they cannot, since they have already revoked them.
For that reason we are using a revocable buffer transaction.

The buffer transaction is a simple transaction that takes the funding transaction output as an input and is itself the input of every CET.
Now if the counterparty acting second is not revoking the buffer transaction in a timely manner, the party revoking first is able to broadcast the buffer transaction and settle the contract unilaterally.

![](/2023-08-29-bringing-dlc-to-lightning-part-3/dlc_channel.png)

### But how to revoke the buffer transaction?

We can again make use of adaptor signatures.
When a contract is set up, both parties give each other an adaptor signature for the buffer transaction input, encrypted with their counterparty publish (public) key.

If either party wants to broadcast the buffer transaction, they need to decrypt the adaptor signature received from their counterparty using the publish (secret) key.
By broadcasting the buffer transaction the publish secret key is revealed, which is fine as long as the buffer transaction hasn't been revoked yet.
However, if it has been revoked the counterparty is also in possession of the revocation secret and will be able to get the entire output funds.
Note that CETs have a relative timelock, giving the cheated party time to punish the counterparty for broadcasting a revoked buffer transaction.

## Embed DLC Channel into a Lightning Channel

In part 2 we talked about adding a custom output to the commitment transaction.
This approach had the significant disadvantage that the CETs would have to be recalculated on every payment received or sent.
That resulted in a lot of overhead that we did not want to have for our 10101 solution.

Consequently, we opted to split the Lightning funding transaction into a Lightning channel and a DLC channel.
We are achieving that by spending the funding transaction into a split transaction containing two outputs: One for the Lightning channel and one for the DLC channel.

### Lightning Channel

This split transaction is again revocable in the same manner as the buffer transaction described before.
Unfortunately, this raises an issue if one party is publishing a revoked split transaction.
The cheated party needs to have some time to notice the broadcasted transaction and punish the counter party, but the Lightning commitment transaction already uses both the `nLockTime` and `nSequence` fields[^2].
To circumvent that issue an additional "glue" transaction is added, spending the Lightning commitment transaction and allowing to add the required timelock.

The following diagram illustrates the complete transaction structure of a DLC-enabled Lightning channel.
Note that different publish and revocation keys are used for the split transaction and the buffer transaction.

![](/2023-08-29-bringing-dlc-to-lightning-part-3/split_transaction.png)

## Closing Thoughts

With a DLC channel living alongside the Lightning channel we are bringing DLCs to Lightning while still keeping a fully-functional Lightning wallet. However, while the proposed solution is certainly [feasible](https://github.com/get10101/10101/) there are still challenges that have to be addressed in future work.

- **On-chain footprint**: Lightning and DLC channels are secure because either party can go on-chain unilaterally at any point. But the split channel setup involves so many transactions that the associated fee costs are considerable. It can be very expensive to go on-chain without collaboration.

- **Splicing**: Managing channel capacity dynamically for _two_ channels to the user's demands would really benefit from splicing capabilities. Interestingly our solution is already implicitly supporting a splice out, as we could for instance only close the DLC channel on-chain independently of the Lightning channel.
  However, a more ergonomic solution is required.

- **Anchor Outputs**: The current transaction structure does not care for updating transaction fees. As there are multiple timelocks involved a simple CPFP is unfortunately not possible. One way to approach that issue is to add anchor outputs to the split and buffer transaction, but that would again increase the on-chain footprint significantly if the counterparty is not collaborative.

## Acknowledgements & References

Our work is heavily inspired by our colleagues at CryptoGarage who were the first to open and close a DLC on Lighting.
See https://medium.com/crypto-garage/dlc-on-lightning-cb5d191f6e64 to read about that in more detail.
We are also happy to build upon their work to further improve DLCs on Lightning contributing to the open-source project [rust-dlc](https://github.com/p2pderivatives/rust-dlc).

[^1] https://comit.network/blog/2022/01/11/cfd-protocol-explained/

[^2] https://github.com/lightning/bolts/blob/master/03-transactions.md#commitment-transaction
