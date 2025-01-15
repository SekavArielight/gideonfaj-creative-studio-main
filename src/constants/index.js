import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    team1,
    team2,
    team3,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Services",
      url: "#services",
    },
    {
      id: "1",
      title: "Portfolio",
      url: "#pricing",
    },
    {
      id: "2",
      title: "About",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Learn",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Contact",
      url: "#login",
      onlyMobile: true,
    },
  ];

  export const team = [
    {
      id: "0",
      name: "Gideon-Faj Owoeye",
      role: "Head Innovator",
      image: team1,
    },
    {
      id: "1",
      name: "Adebare Amos",
      role: "Innovator",
      image: team2,
    },
    {
      id: "2",
      name: "God'swill Sekav Apya",
      role: "Technologist",
      image: team3,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Clearer Angle",
      text: "Clearer Angle develops technological solutions for businesses of all sizes, including accounting software, electronic voting platforms, computer-based tests, and company websites.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Dekem Accesories",
      text: "Dekem Accessories sells stylish add-ons like watches, cufflinks, bracelets, and more.",
      date: "July 2024",
      status: "done",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Elohim Gospel Revelation Ministry",
      text: "Elohim Gospel Revelation Ministries aims to present Jesus as the Christ, the Son of the Living God, and to prepare people for His second coming through the word of Faith.",
      date: "September 2024",
      status: "done",
      imageUrl: roadmap3,
    },
    // {
    //   id: "3",
    //   title: "Integration with APIs",
    //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    //   date: "May 2023",
    //   status: "progress",
    //   imageUrl: roadmap4,
    // },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Strategy",
      text: "Our strategic services are designed to provide a clear roadmap for your business success. We conduct in-depth market analysis, competitive research, and audience profiling to develop tailored strategies that drive growth and enhance your market presence.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: "/src/assets/benefits/image-2.webp",
    },
    {
      id: "1",
      title: "Branding",
      text: "We craft unique and memorable brand identities that resonate with your target audience. From logo design to complete visual identity systems, we ensure your brand stands out in a crowded marketplace.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: "/src/assets/benefits/image-2.webp",
      light: true,
    },
    {
      id: "2",
      title: "Web Design",
      text: "Our web design services focus on creating custom, responsive websites that engage your audience and convert visitors into customers. We ensure your website reflects your brand and delivers an exceptional user experience.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: "/src/assets/benefits/image-2.webp",
    },
    {
      id: "3",
      title: "Digital Marketing",
      text: "Our digital marketing solutions are tailored to increase your online visibility, drive traffic, and convert visitors into loyal customers. We use data-driven strategies to optimize your digital presence across all platforms.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: "/src/assets/benefits/image-2.webp",
      light: true,
    },
    {
      id: "4",
      title: "Print",
      text: "Our printing solutions bring your brand to life with high-quality printed materials. From business cards to promotional items, we deliver exceptional printing services that leave a lasting impression.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: "/src/assets/benefits/image-2.webp",
    },
    // {
    //   id: "5",
    //   title: "Improve everyday",
    //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    //   backgroundUrl: "./src/assets/benefits/card-6.svg",
    //   iconUrl: benefitIcon2,
    //   imageUrl: benefitImage2,
    // },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
  