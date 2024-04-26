---
slug: dlc-to-lightning-part-2
title: Bringing DLCs to Lightning Part 2
authors: [richard, lucas]
tags: [DLC, lightning, knowledge-base]
---

In the first part of this series, we provided an overview of Lightning, Adaptor Signatures and DLCs. If you need a refresher, you can find it [here](https://10101.finance/blog/dlc-to-lightning-part-1).

![](/2023-07-04-bringing-dlc-to-lightning-part-2/bitcoin_struck_by_lightning.png)

In part 2, we will now delve into the approach of expanding the commitment transaction with a custom output. This was our first attempt at bringing DLCs to Lightning.

<!-- truncate -->

## Adding a DLC to a Lightning commitment transaction

A Lightning commitment transaction, which represents the state of your Lightning channel off-chain, can only contain three kinds of outputs:

- Simple outputs that pay to either party.
- Revocable outputs that pay to either party, after a timelock expires.
- Revocable HTLCs, used to route payments through the network.

This means that we need to extend what the commitment transaction supports in order to introduce a DLC.

This design involves adding a revocable output with arbitrary spend conditions, something that we've called custom output. We offload the responsibility of managing the custom output to the layer above the Lightning node. But the Lightning node is still responsible for revoking the output as the state of the channel progresses.

![](/2023-07-04-bringing-dlc-to-lightning-part-2/custom-output.png)

Other than the arbitrary script, the custom output also differs from standard Lightning outputs in being created with coins from both parties involved in the channel. This is important as DLCs commonly lock up funds from two parties.

## Collaborative settlement of a DLC

When settling a DLC, the Lightning node doesn't need to know the specifics. It just needs to be instructed to collaboratively remove a custom output, splitting its coins in a particular way.

![](/2023-07-04-bringing-dlc-to-lightning-part-2/remove-custom-output.png)

This is analogous to what happens when a HTLC is removed after a payment has been claimed.

## Force-closing a channel containing a DLC

Force-closure must be supported so that you don't have to trust your counterparty in the DLC. You must be able to unilaterally close the channel, committing the DLC to the blockchain in the process.

Once the oracle (or oracles) attests to a particular outcome for the relevant event, one CET becomes spendable and is published, splitting the funds according to the original terms of the contract.

Since the Lightning node does not understand the DLC protocol, it is still the responsibility of the layer above to get the right CET on-chain before the DLC can be refunded

## Staying compatible with vanilla Lightning nodes

When coming up with the design, we knew that our modified Lightning node must still be compatible with all other regular Lightning nodes. One of the main appeals of integrating with Lightning is becoming part of the network, tapping into its fast-growing userbase.

Since we are only making additive changes, it follows that this DLC-compatible Lightning node is still able to send and receive payments with anyone else on the network.

## Lessons learned and future work

After implementing that approach as [PoC](https://github.com/get10101/10101-poc) for the [Legends of Lightning tournament](https://bolt.fun/tournaments/1/overview), we've learnt a few things which influenced how we approached our next steps with [10101](https://github.com/get10101/10101).

### Updating a channel that contains an externally-managed custom output is cumbersome

It is nice to be able to ignore the specifics of DLCs at the Lightning node level, but it makes it quite complex to update the channel state. For instance, every time a new payment is routed, there needs to be a lot of communication between the Lightning node, the layer managing the DLC and the counterparty.

### Dual-funded channels

As mentioned, a DLC is a shared output with funds coming from two parties. As Lightning currently only supports opening unilaterally-funded channels [^1], it is impractical to set up the channel in such a way that creating the desired DLC is possible.

## Next

In the next and last blog post of this series we are going to write about how we are using virtual channels alongside the Lightning channel in 10101 to bring DLCs to Lightning.

[^1]: Certain implementations of Lightning such as Core Lightning (aka C-Lightning) do support dual-funded channels
