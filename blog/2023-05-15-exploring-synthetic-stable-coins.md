---
slug: synthetic-stable
title: Exploring Synthetic Stablecoins
authors: [richard, philipp]
tags: [synthetic, stablecoin, knowledge-base]
---

At 10101, we are dedicated to developing a cutting-edge self-custodial synthetic stablecoin powered by Discreet Log Contracts (DLCs).

What sets our stablecoin apart is its complete absence of issuers and the eradication of counterparty risk.

![](https://substack-post-media.s3.amazonaws.com/public/images/91d1e41e-0010-4fac-a7b3-e3ce3aaaaa3c_1760x688.png)

<!-- truncate -->

### Understanding Stablecoins: A Bridge to Stability

Stablecoins play a pivotal role in the cryptocurrency ecosystem by providing stability and mitigating the inherent price volatility associated with digital currencies like Bitcoin. While Bitcoin experiences significant price fluctuations, stablecoins are specifically designed to maintain a steady value, often pegged to reliable assets such as fiat currencies or commodities. These digital assets serve as a reliable bridge between traditional financial systems and the world of cryptocurrencies.

By leveraging stablecoins, Bitcoin users can seamlessly navigate in and out of the crypto market without being exposed to drastic price changes. Moreover, stablecoins empower users to store value, engage in transactions, and participate in decentralized finance (DeFi) activities with enhanced confidence and reduced risk. As a result, stablecoins greatly contribute to the overall usability and accessibility of Bitcoin, positioning it as a practical and versatile digital currency for everyday use.

### Overcoming Challenges: The Downside of Stablecoins

Despite their numerous benefits, stablecoins also present challenges and concerns that must be addressed. One prominent issue revolves around transparency and accountability.

Since stablecoins often operate under the control of centralized entities, users must place trust in these entities to ensure that the pegged value is backed by sufficient reserves or managed in alignment with stated algorithms.

Additionally, the concentration of power within stablecoin issuers poses risks, as their decisions can directly impact the stability and value of the coins.

Liquidity risks may also arise if the reserves supporting the stablecoin are insufficient to meet redemption demands during periods of high market activity.

Lastly, the persistent threat of security vulnerabilities and hacks poses potential financial losses for stablecoin users.

It is paramount to address these challenges in order to establish the long-term viability and trustworthiness of stablecoins as reliable financial tools.

### Unveiling Synthetic Stablecoins: A New Frontier

A synthetic stable coin, also known as a synthetic asset, is a digital representation of a real-world asset that does not have an issuer and is not backed by a reserve in fiat currency.

It uses derivatives to stabilize Bitcoin towards another asset of choice, for example the US dollar. The key is to use a financial instrument that tracks the value of the underlying asset and adjust the supply of the stablecoin to maintain a stable value.

### How does it work?

To achieve a stable position in terms of USD, we utilize a Bitcoin derivative called a perpetual inverse future.

In this mechanism, users who wish to hold a synthetic stablecoin take a short position in a perpetual inverse future with a leverage of 1. A counterparty willing to go long takes the other side of the trade with a leverage of 1.

#### Perpetual inverse future payout function

The chart below illustrates how this function looks like. In the given example it shows how much BTC each party may receive depending on the USD price of BTC.


![](https://substack-post-media.s3.amazonaws.com/public/images/063036c0-0b44-4438-a6fe-1534c5a3f4b3_1029x636.png)

Perpetual Inverse Future Payout Function

The x-axis shows the USD price, while the y-axis shows the profit in BTC. In this example, each party collateralized their positions using 1 BTC initially worth $30,000.

As the price appreciates the person going short gets less BTC back but remains stable in USD terms.

#### Example

**Current Bitcoin Price: $30,000.**

1.  Alice wants to hold $30,000 in our synthetic stable coin.

2.  She has to put up 1 BTC (≜ $30,000).

3.  Bob takes the other side of the trade, and also has to put up 1 BTC (≜ $30,000).


**Assuming the price appreciates to $60,000:**

1.  Alice still holds $30,000 (≜ 0.5 BTC) => $30,000/$60,000 = 0.5 BTC.

2.  Bob holds 1.5 BTC (≜ $90,000).


**Assuming the price depreciates to $15,000:**

1.  Alice still holds $30,000 (≜ 2 BTC) => $30,000/$15,000 = 2 BTC.

2.  Bob holds 0 BTC (≜ $0).


**Assuming the price appreciates to $1,000,000:**

1.  Alice still holds $30,000 (≜ 0.03 BTC) => $30,000/$1,000,000 = 0.03 BTC.

2.  Bob holds 1.97 BTC (≜ $970,000).


**⚠️ Assuming the price falls below $15,000:**

If the price drops below $15,000 in this example, the short position's value will fall below the initial $30,000.

Differently said, the long position gets liquidated at $15,000 and loses everything.

* * *

Want early access to the 10101 app and see synthetic stablecoins without counterparty risk in action?

[Sign up for the beta program](https://9hxmx82rnq8.typeform.com/to/UiZyrhSC)

Happy stacking,   
The 10101 team

* * *

### References

*   https://thebitcoinmanual.com/articles/what-are-synthetic-stablecoins-on-the-lightning-network/

*   https://threadreaderapp.com/thread/1496507594214723590.html

*   https://stephanlivera.com/episode/346/