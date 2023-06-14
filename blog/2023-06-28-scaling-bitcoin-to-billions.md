---
slug: scale-btc-to-billions
title: Scale Bitcoin to billions of users
authors: [philipp]
tags: [scaling, lightning, bitcoin]
---

# How to scale to billions of users

The recent mempool situation reminded us all about the scarcity of blocksize.
The mempool is full, transaction fees are soaring, which makes small on-chain transaction not viable anymore.
This is a problem as we can't scale Bitcoin to billions of users.

![](/2023-06-28-scaling-btc/2023-06-28-future-city.png)

<!-- truncate -->

## Why Lightning in the first place

The [Lightning Network](http://lightning.network/) comes to resscue: it is a layer-2 built on top of Bitcoin which facilitates near instant transactions for a very low fee (for now).
It interacts with the main chain if required but primarily, payments are settled “off-chain”.

## The problem

Exactly these two transactions can be a problem for many users: if the price to open a channel costs $10 and closing the channel costs again $10, then small channels do not make sense economically.
Users are incentiviced to only open big channels and keep them open as long as possible.

Additionally, running a Lightning Node needs

- high capital upfront; and
- technical expertise

Requirements that will be unrealistic for some, especially those who only wish to receive funds with low friction.

## Why not custodial Lightning channels?

Unfortunately, currently the simplest way to interact with the Lightning Network is to use a custodial wallet; this could be through an app like the [Wallet of Satoshi](https://www.walletofsatoshi.com/) or an exchange account you might have with a provider like CashApp.
When you use a custodial Lightning wallet, you are able to interact with Lightning rails and other payment channels on the network, but you’re not holding the funds yourself.

You are merely sending a request to a third-party provider that routes the payments on your behalf and showcase the balance on your screen. You have no way of knowing if that balance exists or if it’s backed by bitcoin until you move it into a non-custodial wallet or swap it for an on-chain UTXO via a [submarine swap](https://docs.lightning.engineering/the-lightning-network/multihop-payments/understanding-submarine-swaps).

A custodial wallet is no different from a banking app you have on your phone right now, except instead of bank crediting ledgers, the provider behind the wallet updates Lightning balances on your behalf.
There is, therefore, a lot of trust between you and the wallet provider and many ways in which this trust can be abused.

> At 10101, we do not endorse custodial (Lightning) wallets as by the definition, there is no such thing as a custodial bitcoin. Your "bitcoin" on an exchange or in a custodial wallets are IOUs and not real bitcoin.

## A solution: hosted channels

One proposed solution comes in the form of hosted channels, which provide users with an easy way to make transactions without needing to open a traditional Lightning channel.

Hosted channels are an extension to the Lightning Network protocol, which allows two Lightning Network nodes to establish a new type of channel between them which is intentionally not backed on the chain.

- One side of such a channel is called a “Host” because it’s the side where the actual money is stored.
- The other side is called a "Client", and it’s the one who trusts the Host.

Established Hosted channels can be announced to the Lightning network where the funds in the hosted channel are a pure Host’s IOU to the client which is not automatically enforceable on-chain but is still auditable.

Host’s balance obligations are cryptographically provable at all times, so the only type of scam a Host can viably perform is an exit scam.
So instead of trying a centralised third party that will consolidate their internal database with the balances in their wallet, you have more assurance that real bitcoin is backing these balances and transactions without needing to redeem it to prove the funds are real.

However, there is still trust invovled between the "Client" and the "Host".

### Better experience

At the cost of trust, hosted channels can offer a better experience:

Instead of expecting a novice Lightning user to put up the UTXOs to fund the channel, they can simply rely on someone else to do that for them to receive funds off-chain.
This makes it far easier for people without the knowledge or infrastructure to get funds into Lightning.

Users will still have the same custodial experience and, to an extent, similar trust assumptions, but they do have more to say in proving they owned funds with signed proofs.

## Final thoughts

Hosted channels are custodial channels.
They are not enforceable on-chain.
But among all the custodial solutions, they appear to as the least worst.
They allow to onboard new users on Lightning at a very low cost, since it is not necessary to actually publish a channel funding transaction.
Of course, they require much more trust than 0-conf channels, but in the same time they fix one of the main issues of this kind of channels: the upfront cost required to join the Lightning Network.

## Actual final thoughts

At the time of writing, a new protocol has been proposed by [Burak](https://twitter.com/brqgoo): [Ark](http://arkpill.me/).
We will focus on this and how this can help us to scale Bitcoin to billions in a future blog post.
In future blog posts we will also cover Lightning-as-a-service, e.g. [Blockstream's Greenlight](https://blockstream.com/lightning/greenlight/) and federation-based scaling solutions like [Fedimint](https://fedimint.org/).

Cheers,
Philipp
