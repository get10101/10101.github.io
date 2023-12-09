---
slug: FAQ
title: FAQ 
authors: [SXBT69]
tags: [Questions, Troubleshooting, 10101]
---

# FAQ

### How can I try 10101?

You can try out the public beta immediately by downloading it from [Google Play](https://play.google.com/store/apps/details?id=finance.get10101.app) if you're using an Android smartphone, and from [TestFlight](https://testflight.apple.com/join/WhwnPUh8) if you're using an iPhone.

10101 is a mobile application. It is not possible to access it from your browser.
### Why "10101"?

10101 is pronounced "ten ten one", and it means 21 in binary. Just a pun!

### What is 10101?

It's an all-in-one Bitcoin application that includes a Bitcoin wallet (On-chain) and a Lightning wallet as well, thus making it possible to send and receive bitcoin using both networks.

Once your Lightning wallet has been funded and your channel opened, the application will give you the ability to trade directly from your wallet, and even hold synthetic cash, such as USDp, the first USD on Lightning.

### On-chain? Lightning?

On-chain is a term used to designate the traditional Bitcoin network: It is used for its high level of security and verifiability, and allows large amounts of money to be sent and received for a fee.

Lightning is a payment network built on top of Bitcoin (referred as layer), designed to enable instant and practically free transactions once your node and channel are set up, while benefiting from the security of Bitcoin's legacy network.

### Will 10101 manage the funds for me?

No, at no time will 10101 hold your bitcoin.

Our application makes a point of respecting and educating users in the principles of self-custody: you hold your own keys, you remain responsible for your wallet and funds, and you retain full control throughout your experience.

That's why you need to make sure you back up your recovery phrase and keep it safe.

### How is it possible to trade directly from my wallet, without a platform?

This is made possible thanks to Discreet Log Contracts (DLCs).

These are peer-to-peer contacts, involving two parties who lock funds into a specific channel. The release of which is conditional: when the contract expires, it releases the funds in the proportions corresponding to the conditions defined at the outset, using data from an oracle to ensure that the transaction proceeds smoothly, in order to prevent any non-collaborative outcome.


DLCs can be seen as an additional layer built on top of the Lightning Network.

If you want to learn more, we produced a series of [blog posts](https://10101.finance/blog/dlc-to-lightning-part-1) on this topic, and another one on the specific case of [trading settlements](https://10101.finance/blog/trade-settlement).


### How do USDp and synthetic currencies work?

USDp and synthetic currencies within 10101 are referred to synthetics in finance.
You will have a USD balance circulating on Lightning, holding nothing but sats and a short position combined.

It's a financial product that hedges you against the volatility of Bitcoin and tracking the value of USD, using only Bitcoin.

If you want to learn more about it we've produced a [blog post](https://10101.finance/blog/synthetic-stable) on this topic.

### What's the point of the recovery phrase?

Your recovery phrase (sometimes called "seed") is the only way to redeem your funds. If you've deleted the app or lost the data on your phone, you will not be able to access your funds without it. We will be unable to assist you either.

You absolutely must save it and keep it in a safe place.

In the case of 10101, this backup will enable you to restore your funds within the app from both your on-chain and lightning wallet, as well as your transaction history and open orders, if you haven't exceeded the time limit* for your futures contracts.

### Do I have to run a node separately to use 10101?

The lightning self-custodial wallet embeds a node directly on your device, so there's no need to run a separate node to use the app.

As for the Bitcoin wallet (On-Chain), it will soon be possible to connect your own node, in order to be independent and sovereign in broadcasting and receiving your transactions from your device.

### How can I fund my Lightning wallet?

To fund your lightning wallet, you'll need to open a channel with 10101, with a minimum deposit size of 60,000 sats and a maximum of 3 million sats.

Depending on the size of this channel, you'll be able to open larger or smaller positions in the trading section, or hold more or less synthetic currency in your wallet.

### Can I fund my Lightning wallet with my On-chain balance?

It is not yet possible to fund your Lightning with your on-chain balance directly from the app, you will need to fund it from another Lightning wallet, or use a third party service that will allow you to perform atomic swaps, such as [Boltz](https://boltz.exchange)

### Can I open several positions at the same time?

It is not yet possible to open several different positions. However, it is possible to resize your position at any time, without being able to change the leverage.

### Why can I not trade with my full Lightning balance?

You will not be able to open positions covering your entire Lightning balance, as you will need to keep a reserve on your balance.

Part of this reserve must remain in your channel to keep it open. Another part is also reserved so that on-chain transaction fees can be covered, enabling you to recover your funds in any worst-case scenario.

### Why can I no longer see my funds on my Lightning balance?

It is very likely that your channel was force-closed. You probably ran into a bug. We're sorry about that.

Your funds should soon be available on your on-chain balance (within two to three days). This delay is due to security timelocks related to Lightning on-chain operations.

In any case, don't hesitate to get in touch with our team, who will be able to help you and answer your questions on our dedicated telegram [support channel](https://t.me/get10101/1189).

### I need guidance

You can count on our team and on the community!

Fee free to join our social channels and get in touch! 
-   [https://10101.finance/](https://10101.finance/)
    
-   [https://x.com/get10101](https://x.com/get10101)
    
-   [https://github.com/get10101/10101/](https://github.com/get10101/10101/)
    
-   [https://matrix.to/#/#tentenone:matrix.org](https://matrix.to/#/#tentenone:matrix.org)
