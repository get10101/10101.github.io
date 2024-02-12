---
slug: see-you-later-mr-lightning
title: See you later, Mr Lightning
authors: [lucas]
tags: [DLC-Channels, Lightning]
---

<!-- LTeX: SETTINGS language=en-GB-->

If you are reading this post, you may have already heard that we have closed all Lightning channels with our users, replacing them with DLC channels.
That may sound like a step backwards, so we want to explain our reasoning behind this decision and tell you why we think it is actually a good thing.

## Why we started with Lightning

10101 was conceived as a mobile Lightning wallet with trading capabilities.
We think most bitcoiners have heard about Lightning, and they have probably even used a Lightning wallet before.
It made sense to us to package our offering together with something that our target user was already comfortable with.

And we saw some synergies between Lightning and DLCs, the technology that we have been using for years to help bitcoiners trade.
We wanted our users to be onboarded instantly: generate a Lightning invoice; pay it with their own Lightning wallet; receive the funds instantly in their 10101 app; and start trading straight away.
The user would then be able to move funds seamlessly between their trading and Lightning wallets.
We even had ambitious plans to let users pay Lightning invoices with a synthetic US dollar stable coin, backed by a DLC.

And we actually managed to do all of that. But the user experience wasn't nearly good enough.

## Why Lightning was slowing us down

We've had problems with Lightning at every step of the user's journey through 10101:

- Users found it difficult to move coins into 10101.
A Lightning payment can fail for many reasons, and it is often hard to pinpoint the cause.
We generally overcame these issues as we learnt more about Lightning, but it is pretty scary to lose a potential user at the first hurdle.

- Users found it very difficult to move coins out of 10101.
If you have used 10101 to pay an invoice, you have almost certainly run into the dreaded `route not found` error message.
Similar to the previous point, debugging these problems was not simple.
In some cases, our node was at fault because routing channels were unusable or the channel-scoring component was not up-to-date.
Other times, payments would fail because the 10101 app had a stale channel graph of the Lightning network.

- Channels would be force-closed for no apparent reason.
Of course, there is always a reason.
Disagreements during fee negotiations and expired HTLCs were the main culprits here.
Regardless, any unnecessary force-closure is catastrophic because it is a waste of money and time for everyone involved.
And this is particularly egregious when you are in a high transaction fee environment, like the one we experienced in 2023.

- When an LN-DLC channel[^1] was force-closed, getting the money back was a huge ordeal.
The LN-DLC protocol requires up to 5 different transactions to be published when a channel is closed unilaterally.
Several of these transactions have long timelocks to keep the protocol safe, and every transaction needs to pay a fee to be mined.
This meant that it could take a very long time for a substantially smaller portion of the funds to be returned.
And, in some edge cases, certain transactions would not even get mined because their reserved fees were too low compared to the rest of mempool[^2].

As you might imagine, many developer hours were spent chasing Lightning-related bugs[^3], and this was complicated further by the fact that we were maintaining an extremely complex chain of code dependencies to support Lightning in the first place.
We received excellent support from the maintainers of `rust-dlc` and `rust-lightning`, but we were always fighting an uphill battle.

Ultimately, the main goal of 10101 was to let you trade self-custodially with your sats.
We were spending a disproportionate amount of time working on problems related to Lightning, with little time left to improve the trading experience.

## Ripping the band-aid off

At the start of 2024, we finally decided to pivot away from LN-DLC channels.
It was not an easy decision, because we had invested so much time into improving the protocol[^4].
But we knew that we had to simplify the tech in a way that better aligned with our priorities.

This pivot involved removing the "LN" out of LN-DLC channels.
Fortunately, there already existed an implementation of DLC channels[^5] in `rust-dlc`, and we were very familiar with the code.
We were able to replace LN-DLC channels with DLC channels in just a few weeks.

There are still some hiccups, but users are encountering fewer problems using the app and the dev team is in a **much** better position to fix bugs and add new features.
Funnily enough, _Lightning_ is a feature that we want to reintroduce in the future.

## The comeback

We haven't planned this carefully in advance, but we have some ideas on how this re-integration could look like.

Since the 10101 user already has a DLC channel with us, we already have a place where funds can be moved between the two parties.
The library we are using does not currently support using the DLC channel for payments between the two parties, but this would be relatively easy to implement.

Once we are able to make payments within the DLC channel, we just have to bridge the gap between this isolated channel and the Lightning Network.
That is, to ensure that a payment within the channel can be propagated through the Lightning Network to reach the payment destination.

A naive approach would be for the user to send us some sats plus a Lightning invoice, and for us to pay the invoice once the payment in our DLC channel has been committed.
This has the obvious downside that the user has to trust us to make the payment on their behalf.
Nevertheless, it could be acceptable for small payments.

To make it "trustless", we would have to make the payment within the DLC channel conditional on the Lightning payment being claimed.
The user would generate a Lightning invoice at the destination wallet and feed it into the 10101 app.
The app would then add a HTLC to the DLC channel, locked against the secret hash of the invoice.
Our 10101 node would then make the payment on Lightning, which, once claimed by the destination wallet, would reveal the secret back to us.
With the secret we would then be able to claim the HTLC in the DLC channel, but we would then collaborate with the app to remove the HTLC altogether and update the balances accordingly.

![](/2024-02-09-see-you-later-mr-lightning/dlc-lightning-payment-protocol.png)

Obviously, that just sounds like Lightning.
But in reality the payment within the DLC channel could be unlocked by a secret that has nothing to do with a Lightning payment.
Which means that the DLC channel can be oblivious of Lightning altogether, simplifying the implementation.
And the app does not need to run a Lightning node!

## Outro

On a personal note, I am proud of the team for being humble and admitting that we had to change our approach.
As with most things in life, we now wish we had done it sooner, but hindsight is always 20/20.

If you have any further questions or comments, please reach out on [Telegram](https://t.me/get10101/1) or on [Twitter](http://twitter.com/).
We always want to hear from you.
And if you haven't used the 10101 app yet, head over to [10101.finance](https://10101.finance), where you can find download links for you app store of choice.

[^1]: LN-DLC channels are channels that support both the Lightning protocol (for payments) and DLC channels (for trading, in 10101).
They are the construct that allowed 10101 to users to use Lightning and trade at the same time, with a single channel.

[^2]: We could have fixed this by ensuring that each LN-DLC transaction included an anchor output (per party).
In fact, this is something that we now need to address for DLC channels, where the buffer transaction does not include anchor outputs.

[^3]: To be clear, this is not to blame Lightning for all of our problems.
Users also encountered problems with parts of the app that did not involve Lightning directly.
And, in any case, we take responsibility for the bugs that our users have run into during the beta.

[^4]: The author of which is Thibaut Le Guilly, the maintainer of `rust-dlc`.

[^5]: We used extremely similar technology in our previous project, ItchySats.
