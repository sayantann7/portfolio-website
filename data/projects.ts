export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "SymbiSwap",
    description:
      "SymbiSwap is a peer-to-peer academic marketplace that allows students to exchange notes, assignments, previous year question papers (PYQs), and services within their college ecosystem.",
    tags: ["Next.js", "Clerk Auth", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/sayantann7/symbiswap.git",
  },
  {
    title: "SymbiEat",
    description:
      "A modern web application for SIT Pune students to order and reserve food from their college canteen.",
    tags: ["HTML CSS", "JS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/sayantann7/symbi-eat.git",
  },
  {
    title: "Deep-Q Lunar Lander",
    description:
      "This project implements a Deep Q-Network (DQN) agent to solve the Lunar Lander environment from the OpenAI Gym.",
    tags: ["Deep Q-Network", "gymnasium", "Python", "PyTorch"],
    githubUrl: "https://github.com/sayantann7/symbichat.git",
  },
  {
    title: "CodeHub",
    description:
      "CodeHub is an online code editor that allows you to share and run code snippets. It supports multiple languages and runtimes.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Piston"],
    githubUrl: "https://github.com/sayantann7/code-hub.git",
  },
  {
    title: "Smallr",
    description:
      "Smallr is a URL shortener that makes it easy to create, share, and manage short links. Create your own custom short links with Smallr.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/sayantann7/smallr.git",
  },
  {
    title: "Ranked Choice Election DApp",
    description:
      "Ranked Choice Election is a decentralized voting smart contract that allows users to participate in elections using a ranked-choice voting system.",
    tags: ["Solidity", "Hardhat", "Chai", "Ethers.js", "Node.js"],
    githubUrl: "https://github.com/sayantann7/ranked-choice-election.git",
  },
  {
    title: "Flinge",
    description:
      "Flinge is a social media platform that allows users to create profiles, make posts, and receive movie recommendations based on their activity and preferences.",
    tags: ["HTML CSS", "JS", "Node.js", "Express", "MongoDB", "Gemini"],
    githubUrl: "https://github.com/sayantann7/flinge.git",
  },
  {
    title: "Pinterest Clone",
    description:
      "This project aims to be a fully functional clone of Pinterest, designed to replicate the core features of the popular image-sharing platform. Users can create accounts, upload images, organize them into collections, and explore content shared by other users.",
    tags: ["HTML CSS", "JS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/sayantann7/pinterest-clone.git",
  },
  {
    title: "SIT Turf Tracker",
    description:
      "A sleek, responsive web application designed to track and display the real-time occupancy status of the football turf at SIT's HillBase campus.",
    tags: ["HTML CSS", "JS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/sayantann7/sit-turf.git",
  },
  {
    title: "SymbiCafe Bot",
    description:
      "This project implements a Telegram bot for SymbiCafe. Users can interact with the bot to select menu sections, choose items with prices, and place their order.",
    tags: ["Telegram API", "BotFather"],
    githubUrl: "https://github.com/sayantann7/symbicafebot.git",
  },
  {
    title: "Ping Pong Game",
    description:
      "This is a simple Pong game built using Python's Pygame library. It is a two-player game where each player controls a racket to hit a ball.",
    tags: ["Python", "Pygame"],
    githubUrl: "https://github.com/sayantann7/Ping-Pong-Game.git",
  },
  {
    title: "SpaceBusters",
    description:
      "SpaceBusters is a 2D space shooting game built using Python's Pygame library. In this game, the player controls a spaceship and shoots enemies while avoiding enemy bullets.",
    tags: ["Python", "Pygame"],
    githubUrl: "https://github.com/sayantann7/SpaceBusters.git",
  },
  {
    title: "WPM Typing Test",
    description:
      "This is a terminal-based Words Per Minute (WPM) typing test built using Python and the curses library.",
    tags: ["Python", "Curses"],
    githubUrl: "https://github.com/sayantann7/WPM-typing-test.git",
  },
  {
    title: "CoPal",
    description:
      "CoPal is a web application designed for 12th-grade students to connect with others who are attending the same college.",
    tags: ["HTML CSS", "JS", "Node.js", "Express"],
    githubUrl: "https://github.com/sayantann7/CoPalV2.git",
  },
];
