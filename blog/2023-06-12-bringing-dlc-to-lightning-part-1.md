---
slug: dlc-to-lightning-part-1
title: Bringing DLCs to Lightning Part 1
authors: [richard, lucas]
tags: [DLC, lightning, knowledge-base]
---

At 10101 we are working on extending the Lightning network to support DLCs, allowing Bitcoiners not only to pay and receive payments, but also to trade right from their channels.

![](/2023-06-12-bringing-dlc-to-lightning-part-1/bitcoin_struck_by_lightning.png)

In this series of blog posts, we will delve into how 10101 brings DLCs to the Lightning Network.
The series will consist of three parts:

- **Part 1**: A recap on Lightning and DLCs.
- **Part 2**: Exploring the incorporation of a **Custom DLC Output** on top of the Lightning commitment transaction.
- **Part 3**: Discussing the integration of a **Virtual DLC channel** alongside the Lightning channel.

*Teaser*: At 10101, we ultimately opted to develop virtual channels as our solution.

## A recap on Lightning

In order to understand the process of setting up a Discreet Log Contract (DLC) within a Lightning channel, it is essential to have a basic understanding of the transaction structure associated with regular Lightning channels. Let us briefly review this structure, focusing solely on the aspects relevant to our discussion and omitting details like routing, liquidity, etc.

When two Lightning nodes establish a channel, they collaboratively construct and sign two types of transactions: the funding transaction and the commitment transactions.

1. **Funding Transaction:** takes a number of UTXOs from one of the two parties as inputs.
These funds are locked within a 2-of-2 output, which necessitates the signatures of both parties to be spent.
This output is known as the funding output and serves as a repository for the channel's funds.

1. **Commitment transaction:** references the funding output as its input and incorporates two outputs, each reflecting the balance held by the respective parties.
It is important to note that these balances are subject to change throughout the channel's lifespan, thus requiring the commitment transaction to be updatable to accurately reflect these modifications.
To achieve this, the commitment transaction is designed to be revocable.
In practical terms, each party maintains a distinct version of the commitment transaction, with the output paying to themselves secured by a script that can be unlocked either by their own signature after a specific period or by their counterpart possessing a secret.
When the parties reach an agreement to adjust the channel balance (e.g. one party intends to transfer a certain amount of sats to the other), they generate and exchange signatures for the updated commitment transactions while simultaneously revealing the secrets used in the previous versions.
In the event of a party attempting to cheat the other by broadcasting an outdated commitment transaction, the opposing party has a window of time to respond and employ the revealed secret to claim all the channel's funds.

The following diagram illustrates the transaction structure of a lightning channel.

![](/2023-06-12-bringing-dlc-to-lightning-part-1/lightning_channel.png)

*If you want to read up in more detail how Lightning works have a look at this [blog post](https://medium.com/softblocks/lightning-network-in-depth-part-1-payment-channels-b943607950dd)*

## A recap on Adaptor Signatures

An adaptor signature is a signature that has been encrypted with a secret, and for which we can prove that after decryption (or with knowledge of the secret) we obtained a valid signature for a given message.

For a DLC we use the oracle's signature as a secret to encrypt the counterparty's signature which unlocks a certain Contract Execution Transaction (CET).
These signatures are created as adaptor signatures using the oracle's announcement that it will attest to an event outcome in the future.
Using this publically available information both parties generate all possible signature points that could be released by the oracle and use them to encrypt their signatures.
Upon exchanging and verifying these adaptor signatures, both parties have collected all data required to eventually broadcast the only valid CET.

*If you want to read up in more detail about Adaptor Signatures and how they are used in the context of DLCs have a look at this [blog post](https://medium.com/crypto-garage/optimizing-numeric-outcome-dlc-creation-6d6091ac0e47#96e9)*

## A recap on DLCs

Discreet Log Contracts (DLCs) are a type of smart contract protocol that operates on the Bitcoin blockchain, allowing for the execution and settlement of contracts based on events external to the blockchain.

During the setup of a DLC both parties lock up funds in a DLC output.
This output can only be spent with signatures from both parties.
At the time of the DLC setup the actual event outcome is not know yet, but the oracle has announced that it will attest to its outcome at a specific point in the future.
Both parties generate multiple CETs, each defining how to split up the locked up funds based on a specific potential future event outcome.
After agreeing on the CETs, both parties exchange adaptor signatures on each of them. An adaptor signature for any given CET will only be unlocked if the oracle attests to the specific event outcome associated with the corresponding CET.

The key characteristics of a CET are the following:

 - Only one CET will become valid after the attestation of one or multiple oracles.
 - Neither party can publish a valid CET without having the oracle's attestation.
 - Publishing a CET is unilateral after the oracle's attestation.

The most simple example of a DLC is a binary option.
The diagram below illustrates the transaction structure of such a DLC.
As the potential future event outcomes can only be true or false, only two CETs have to be generated.

![](/2023-06-12-bringing-dlc-to-lightning-part-1/binary_dlc.png)

*Note, in case of a numerical outcome, a CET would have to be created for every possible outcome or a range of outcomes.*

## Next

In the next blog post we are going to write about the first approach we tried to bringing DLCs to Lightning using a Custom DLC Output on the commitment transaction.


## References

- https://adiabat.github.io/dlc.pdf
- https://medium.com/crypto-garage/optimizing-numeric-outcome-dlc-creation-6d6091ac0e47#96e9
- https://medium.com/crypto-garage/dlc-on-lightning-cb5d191f6e64
- https://raw.githubusercontent.com/LLFourn/one-time-VES/master/main.pdf
- https://medium.com/softblocks/lightning-network-in-depth-part-1-payment-channels-b943607950dd
