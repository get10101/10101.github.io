---
slug: trade-settlement
title: Self-custodial trade settlement
authors: [daniel]
tags: [self-custodial, trading, knowledge-base]
---

![](https://substack-post-media.s3.amazonaws.com/public/images/6a068062-2015-458a-9d34-3ed1639d5fa4_2527x2527.png)

In our [previous blogpost](2023-05-09-panic-button.md) we wrote about the motivation for self-custodial trading and when it matters. In this blogpost we explore how the self-custodial setup works and what happens when you click the button to close a position.

When you trade in 10101 there are three phases:

1.  **Discovery**: Finding a trading partner through the 10101 orderbook

2.  **Execution**: Opening the position by setting a P2P smart contract on Bitcoin

3.  **Settlement**: Closing the position by resolving the contract

<!-- truncate -->

In 10101 we use [DLCs (discreet log contracts)](https://bitcoinops.org/en/topics/discreet-log-contracts/) which are smart contracts on Bitcoin. In a nutshell these smart contracts are a set of rules and messages that are used to set up spending conditions of locked up funds of two trading parties in different scenarios.

In 10101 you trade over the Lightning network and the smart contract is represented as a DLC that extends your Lightning channel. When a trade is executed a DLC is set up with your trading partner on top of a Lightning channel.

Once set up there are two scenarios of spending the locked up funds and closing the position:

1.  **Collaborative settlement**: When you hit the close button you trigger a protocol that request to close the position at the current price with your trading partner.

2.  **Non-collaborative settlement**: Either you or your trading partner decide that a collaborative settlement is not possible and trigger an on-chain settlement.

As long as your trading partner is responsive you will agree on the Lightning balances in the channel and update them, resulting in instant settlement. In most cases you will reach agreement, because there is no incentive to trigger a non-collaborative settlement which is more expensive. While more expensive, the non-collaborative settlement enables either party to have a way out in a worst case scenario.

![](https://substack-post-media.s3.amazonaws.com/public/images/1089a1cd-0193-4a3a-b347-ab692ce7c252_1300x1497.png)

Settlement paths in 10101 (for details see [this blogpost](https://medium.com/crypto-garage/dlc-on-lightning-cb5d191f6e64))

Your day-to-day experience is exactly like on any other trading platform, you open and close trades instantly. Only in a scenario where the trading party is not online or tries to manipulate values to act outside the protocol a non-collaborative settlement can become necessary. Manipulating code to cheat will always result in protocol failure because both parties always validate the execution according to the protocol. So, if one party is not available or tries to cheat the protocol will fail to execute.

If the collaborative settlement fails repeatedly the panic button will get activated. When you hit the panic button, instead of agreeing on the settlement with the other party, the 10101 app will enforce the settlement relying on the price signed by one or multiple oracles. The oracle price is published when your position expires and the 10101 app will automatically pick the corresponding settlement transaction and publish it.

Even in a worst of all worst case scenarios - your trading partner is gone and the oracles are gone - there is a way to recover your funds. The protocol includes a refund path that can be executed after a timelock of 7 days. So, if the oracle has not attested the price for the agreed timestamp of the expiry of your position within one week the 10101 app will recover the funds initially locked up (minus transaction fees) by publishing a refund transaction for you.

Nobody can stop you from pressing the panic button, and nothing can stop the protocol execution on chain once it is triggered. Your funds will end up in your wallet one or the other way - it's just a matter of waiting for certain timelocks to expire.

---

Want early access to the 10101 app and see self-custodial trading in action?

[Sign up for the beta program](https://9hxmx82rnq8.typeform.com/to/UiZyrhSC)

Great thanks to [Thibaut Le Guilly](https://medium.com/@leguilly.thibaut?source=post_page-----cb5d191f6e64--------------------------------) from Crypto Garage and his work on [rust-dlc](https://github.com/p2pderivatives/rust-dlc). We are very happy to collaborate on bringing DLCs to LDK’s [rust-lightning](https://github.com/lightningdevkit/rust-lightning) together ❤️  
For a deep dive into the protocol details check out [Thibaut’s excellent post](https://medium.com/crypto-garage/dlc-on-lightning-cb5d191f6e64)!

Happy stacking,  
The 10101 team

---

P.S. The oracle is a third party that is trusted to attest the correct price. This raises questions how this trust can justify a DLC setup. Using multiple, independent and well-known oracles is just one way to crate a setup resilient to attacks. Which oracles to use can be configured when matching the trading parties during the discovery phase. Oracles are a big topic that we will explore in depth in another blogpost!
