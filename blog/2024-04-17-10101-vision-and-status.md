---
slug: why-what-how
title: Self-Custodial Derivative Trading on Bitcoin - Our Journey at 10101
authors: [philipp]
tags: ["10101", Vision, Why, What, How]
---

# 10101 - Why? What? How?

![Logo](/2024-17-04-10101-vision-and-status/logo.svg)

Welcome to a new chapter in financial freedom. At 10101, we are not just building a platform; we are crafting the future of how Bitcoin trades, driven by the vision of an economy liberated from central authority. Join us on this transformative journey, where innovation meets security, and individual sovereignty is the standard, not the exception.

**Trading Bitcoin is Broken!**

<!-- truncate -->

![Where is my money](/2024-17-04-10101-vision-and-status/mtgox.png)

If you're familiar with Bitcoin, you know its core promise: to serve as unstoppable, censorship-resistant digital money. Central to this promise is the ability to self-custodize your Bitcoin—ensuring you never need to trust anyone else with your assets. The mantra "don’t trust, verify" isn’t just a slogan; it's a fundamental principle of the Bitcoin ecosystem.

Yet, when it comes to trading Bitcoin, this principle falters. Traders must deposit their funds into another party’s wallet, trusting that they’ll see their money returned. This trust has been breached more than once and has led to high-profile collapses: from MtGox a decade ago, to the recent downfall of FTX. Each incident not only harms individual investors but also sets back Bitcoin's global adoption.

This is where **10101** (pronounced "Ten Ten One") comes in. We are pioneering a trading solution that completely eliminates counterparty risk. With our platform, there's no need for a centralized exchange or an escrow service. Your keys, your Bitcoin, your control. Join us in making truly trustless Bitcoin trading a reality.

### The Why

<figure>
  <img
  src="/2024-17-04-10101-vision-and-status/sovereign.png"
  alt="Sovereign Individual"></img>
  <figcaption>Image source: The Sovereign Individual: Mastering the Transition to the Information Age</figcaption>
</figure>

**Empowering Individual Sovereignty**

At the heart of our mission lies a fundamental belief in **individual sovereignty**[^1]. Bitcoin's promise of financial autonomy is compromised when traders are forced to rely on centralized exchanges or escrow services.

We founded 10101 with the conviction that every Bitcoin holder deserves the opportunity to trade without sacrificing control or security.

**Addressing Systemic Risks**

The systemic risks inherent in centralized exchanges pose a significant barrier to the widespread adoption of Bitcoin. The collapse of major exchanges not only undermines investor confidence but also erodes trust in the entire cryptocurrency ecosystem.

By eliminating the need for intermediaries, we aim to mitigate these risks and foster a more resilient and trustworthy trading environment.

**Advancing Bitcoin's Core Principles**

Bitcoin was designed to operate without intermediaries - to enable peer-to-peer transactions that are trustless and censorship-resistant. However, the current state of the trading landscape falls short of realizing this vision.

At 10101, we are committed to upholding Bitcoin's core principles by providing a platform that empowers users to transact directly, without third-party custodians that control user funds.

**Towards a future without central authority**

10101 is not only about enhancing the security and efficiency of Bitcoin trading; it's about championing a broader movement towards an economy liberated from central authority. We aim to democratize access to financial services, making it possible for anyone, anywhere, to participate in the global economy securely and independently. 10101 serves as a gateway for widespread adoption, where trust is built on cryptographic proof rather than institutional promise.

In summary, our why is rooted in a deep commitment to **individual sovereignty**, a desire to **address systemic risks**, a dedication to **advancing Bitcoin's core principles,** and a relentless drive to **pioneer innovation** in the **world of decentralized finance**.

### The What: Revolutionizing Bitcoin Trading with 10101

![Future of trading](/2024-17-04-10101-vision-and-status/trading_future.png)

At 10101, we are dedicated to enhancing the trading experience while maintaining the core principles of Bitcoin. Here's what sets us apart:

**Direct Trading on Bitcoin’s Blockchain**

We leverage the inherent security and decentralization of Bitcoin by building our trading platform directly on its blockchain. Currently, our focus is on **perpetual futures**. This specialized financial instrument allows traders to speculate on the price of Bitcoin without ever needing to hold any other assets. It simplifies trading by ensuring that users can remain invested in Bitcoin while still bet on market movements.

**Eliminating Counterparty Risk**

One of the fundamental aspects of 10101 is the elimination of counterparty risk. Traditional trading platforms require users to deposit funds into a centralized wallet, leading to potential security risks and trust issues.

At 10101, we negate this risk by enabling a fully self-custodial trading experience. Traders are provided with a secure wallet, generated by 12 seed words that they back up and control completely. This means that at no point do users need to relinquish control of their funds to trade.

**Specialized Trading Interfaces**

![Screenshots](/2024-17-04-10101-vision-and-status/screenshots.png)

We understand that our users have diverse needs and preferences, which is why we offer two distinct solutions:

- **Retail Application:** Accessible via Android, iOS, and direct APK download for those who prefer not to use Google's Play Store, our app is designed for everyday retail users. It features a user-friendly interface that makes navigating the complexities of derivative trading as straightforward as possible.
- **Institutional Application:** For institutions requiring greater control over their trading environment, we offer a server-side application. This setup provides enhanced security features and customization options, catering to the specific needs of institutional traders.

**Future-Proofing Trading**

Looking forward, we are committed to continuous innovation. We're exploring other financial instruments like synthetic assets and options and futures to empower users with variety of different financial instruments to trade and to management risk. Reintroducing Lightning Network support and synthetic stable coins (USDp) further solidifies our commitment to accessibility and inclusivity.

### The How: Building trust-minimized trading

**Leveraging Discreet Log Contracts (DLCs)**

At the core of 10101's technology is the use of Discreet Log Contracts (DLCs)[^2], an ingenious cryptographic protocol that allows for conditional payments directly on the Bitcoin blockchain. DLCs work by enabling two parties to distribute funds based on agreed-upon conditions, without any of these details being visible on the blockchain. This not only preserves privacy but also keeps the blockchain free from any additional complexities. These contracts appear as ordinary multisignature outputs, making them indistinguishable from standard transactions to outside observers.

**Innovating with DLC Channels on Layer 2**

Building on the foundation of vanilla DLCs, we have pioneered the concept of DLC Channels. This advancement allows for the creation and settlement of DLCs off-chain, drastically reducing transaction fees and improving scalability. By moving these operations to Layer 2, we enhance the efficiency of our trading platform while ensuring full self-custody at all times.

**Open Source Development**

Our development is anchored in the open-source library, `rust-dlc`, which we maintain and contribute to actively. This ensures that our platform benefits from community-driven enhancements and peer reviews, keeping our technology at the cutting edge and secure. The source can be accessed here: [`rust-dlc`](https://github.com/p2pderivatives/rust-dlc)[^3]. The remainder of our project is also fully open source and can be found here: [`10101`](https://github.com/get10101/10101/)[^4].

**User Interface and Experience**

To complement our Rust backend, we use Flutter to develop intuitive and aesthetically pleasing user interfaces. Our goal is to demystify the complexities of derivative trading and make it accessible and engaging for both novice and experienced traders. The result is a seamless user experience that makes trading as straightforward as using a conventional app.

**Our Team's Track Record**

Our team's journey reflects our deep-rooted passion for pushing the boundaries of innovation in cryptographic protocols and Bitcoin. Since our inception in 2018 as an R&D lab, we've been at the forefront of pioneering developments. We've facilitated groundbreaking achievements like orchestrating the [world’s first ERC-20 and Bitcoin atomic swap](https://bitcoinmagazine.com/technical/worlds-first-erc-20-and-bitcoin-atomic-swap-has-taken-place)[^7] with our project [comit-rs](https://github.com/comit-network/comit-rs)[^5]. Additionally, we've bridged [Monero and Bitcoin](https://github.com/comit-network/xmr-btc-swap)[^11] and delved into trustless lending on the Liquid network. Our experiences, including ventures like [ItchySats](https://www.itchysats.network/)[^12], have equipped us with a wealth of knowledge and hands-on experience. With over six years of immersion in the crypto landscape, we are poised to continue driving innovation and shaping the future of decentralized finance. Join us on our journey as we continue to innovate and redefine the possibilities of cryptographic protocols.

**Current Availability**

10101 is live and operational. You can start trading today by downloading our app for Android and iOS. Visit [10101 Finance](https://10101.finance/) for direct links to your favorite app store and get started in no time.

### Where We're Headed: Expanding Horizons at 10101

### Short-term Goals: Perfecting the Platform

Our journey with the public beta of 10101 on Android and iOS has been encouraging, but we recognize there's more to be done to refine our service. We are committed to reinstating key features and introducing new functionalities:

- **Reintegration of Lightning Network:** Earlier this year, we had to remove support for the [Lightning Network](https://10101.finance/blog/see-you-later-mr-lightning)[^6]. We plan to reintroduce this capability, enabling faster, cheaper Bitcoin transactions which are critical for efficient microtransactions and real-time trading.
- **Re-launching USDp:** Our synthetic stable coin, USDp, will return to the platform. This feature allows users to hedge against Bitcoin’s volatility without leaving Bitcoin’s ecosystem, maintaining value in USD while benefiting from the security and potential of Bitcoin. USDp's integration with the Lightning Network further enhances its utility, making it transferable as sats.

The next major milestone for us is moving out of beta. Achieving this status means reaching feature completion and ensuring platform stability, a milestone we believe is within close reach.

### Long-term Vision: Untethering Self-sovereign Bitcoin Finance

![Road into the future](/2024-17-04-10101-vision-and-status/longterm-vision-road-to-future.png)

Looking beyond immediate improvements, our goal is to address some of the fundamental challenges in the crypto trading space:

- **Innovating Liquidity Pools:** Current channel-based trading is limited to two-party interactions. We aim to expand this by developing liquidity pools directly on the Bitcoin network. Although this research is nascent, technologies like BitVM and potential softfork enhancements like OP_CTV or OP_CAT show promise. These advancements will pave the way for a more interconnected and fluid trading environment.
- **One App, All Things Bitcoin:** In the future, 10101 aims to be the all-encompassing app for everything Bitcoin-related. From trading without counterparty risks to managing both hot and cold storage, or even making everyday purchases with Bitcoin or USDp, we envision 10101 as the ultimate tool for Bitcoin enthusiasts.

### Catalyzing Broader Adoption

As our platform matures and our libraries stabilize, we will encourage third-party developers to integrate USDp and trustless trading features into their applications. This initiative will broaden the utility of our innovations, embedding them into a wider array of services and applications.

### Embracing the Mission: Untethering **Self-sovereign Bitcoin Finance**

Our broader mission is to **untether the power of self-sovereign Bitcoin finance**. We **believe in an economy liberated from central authority**, where individuals can manage their financial lives independently and securely. By continuously pushing the boundaries of what is possible within the Bitcoin ecosystem, 10101 aims to lead the way in creating a truly decentralized financial system.

### Conclusion: Join Us on the Journey to Transform Bitcoin Trading

![Road into the future](/2024-17-04-10101-vision-and-status/join_us.png)

As we continue to build and expand 10101, our focus remains steadfast on empowering traders with the tools they need for secure, private, and efficient Bitcoin trading. From the reintroduction of features like the Lightning Network and USDp to our long-term vision of a fully integrated Bitcoin app.

### Get Involved

- **Try Our Platform:** Experience the future of Bitcoin trading today by downloading the 10101 app. Available for Android and iOS, you can start exploring all our features in the current beta version. Visit [our website](https://10101.finance/)[^8] for direct links to download the app.
- **Follow Us on Social Media:** Join our community on [Twitter](https://twitter.com/get10101)[^9] or [Telegram](https://t.me/get10101/1)[^10] to stay engaged with our developments and participate in discussions with like-minded individuals.
- **Provide Feedback:** As a beta user, your feedback is invaluable to us. Help us refine and perfect our app by providing your insights and suggestions. Contact us through Telegram or on Twitter.
- **Spread the Word:** If you believe in what we’re building, share our story and app with your network. Every mention helps us grow our community and improve our offerings.

### Thank You for Your Support

We are grateful to everyone who has joined us so far on this exciting journey. Your support and participation are what fuel our continuous innovation and dedication. Together, we are paving the way for a decentralized financial future that aligns with the true ethos of Bitcoin—empowering and liberating.

Cheers,
Philipp and the whole 10101 team

[^1]: Recommended read: The Sovereign Individual: Mastering the Transition to the Information Age, by James Dale Davidson and Lord William Rees-Mogg
[^2]: [https://dci.mit.edu/smart-contracts](https://dci.mit.edu/smart-contracts)
[^3]: [https://github.com/p2pderivatives/rust-dlc](https://github.com/p2pderivatives/rust-dlc)
[^4]: [https://github.com/get10101/10101](https://github.com/get10101/10101)
[^5]: [https://github.com/comit-network/comit-rs](https://github.com/comit-network/comit-rs)
[^6]: [https://10101.finance/blog/see-you-later-mr-lightning](https://10101.finance/blog/see-you-later-mr-lightning)
[^7]: [https://bitcoinmagazine.com/technical/worlds-first-erc-20-and-bitcoin-atomic-swap-has-taken-place](https://bitcoinmagazine.com/technical/worlds-first-erc-20-and-bitcoin-atomic-swap-has-taken-place)
[^8]: [https://10101.finance](https://10101.finance)
[^9]: [https://twitter.com/get10101](https://twitter.com/get10101)
[^10]: [https://t.me/get10101](https://t.me/get10101/1)
[^11]: [https://github.com/comit-network/xmr-btc-swap](https://github.com/comit-network/xmr-btc-swap)
[^12]: [https://www.itchysats.network/](https://www.itchysats.network/)
