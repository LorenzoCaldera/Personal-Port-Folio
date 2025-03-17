import { 
    faCalculator, 
    faDrum, 
    faQuoteRight, 
    faFileAlt, 
    faClock, 
    faChartBar, 
    faCode, 
    faCalendarAlt, 
    faTasks, 
    faComments 
} from "@fortawesome/free-solid-svg-icons";

const projects = [
    { 
        links: { url: "https://calculator-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Calculator" }, 
        name: "Calculator", 
        description: "Clasic calculator from a freeCodeCamp project.", 
        tags: ["JavaScript", "CSS"],
        icon: faCalculator
    },
    { 
        links: { url: "https://drum-machine-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Drum-Machine" }, 
        name: "Drum Machine", 
        description: "Website to play the drum with your keyboard. A project from freeCodeCamp.", 
        tags: ["JavaScript", "CSS"],
        icon: faDrum
    },
    { 
        links: { url: "https://random-quote-machine-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Random-Quote-Machine" }, 
        name: "Random Quote Machine", 
        description: "Website to create randoms quote. You can post them in Twitter.", 
        tags: ["JavaScript", "CSS"],
        icon: faQuoteRight
    },
    { 
        links: { url: "https://markdown-previewer-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Markdown-Previewer" }, 
        name: "Markdown Previewer", 
        description: "Website to use Markdown a text converter. Project from freeCodeCamp.", 
        tags: ["JavaScript", "CSS"],
        icon: faFileAlt
    },
    { 
        links: { url: "https://25-5-study-clock.netlify.app", github: "https://github.com/LorenzoCaldera/25-5-Study-Clock" }, 
        name: "25-5-Study-Clock", 
        description: "Website to get a clock that helps you studying! It switch between study time and break time.", 
        tags: ["JavaScript", "CSS"],
        icon: faClock
    },
    { 
        links: { url: "https://data-visualization-projects.netlify.app", github: "https://github.com/LorenzoCaldera/Data-Visualization-Projects" }, 
        name: "Data Visualization Projects", 
        description: "These are the projects to finish the course Data Visualization from freeCodeCamp. Feel free to visit them.", 
        tags: ["JavaScript", "CSS"],
        icon: faChartBar
    },
    { 
        links: { url: "https://adventjs-2023.netlify.app", github: "https://github.com/LorenzoCaldera/AdventJS-2023" }, 
        name: "AdventJS-2023", 
        description: "AdventJS is a website where you can find coding challenges. Here are some of my 2023 attempts.", 
        tags: ["JavaScript", "CSS"],
        icon: faCode
    },
    { 
        links: { url: "https://calendar-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Calendar" }, 
        name: "Calendar", 
        description: "A calendar where you can add a unique task each day! Also, you can choose to repeat every day of the week.", 
        tags: ["JavaScript", "CSS"],
        icon: faCalendarAlt
    },
    { 
        links: { url: "https://task-manager-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/task-manager" }, 
        name: "Task Manager", 
        description: "Simple task manager with cool animation.", 
        tags: ["JavaScript", "CSS"],
        icon: faTasks
    },
    { 
        links: { url: "https://global-chat-lorenzo-caldera.netlify.app", github: "https://github.com/LorenzoCaldera/Global-Chat" }, 
        name: "Global Chat", 
        description: "A chat using peer to peer. Here you can't make private chats, only chat in global! Not finished yet.", 
        tags: ["JavaScript", "CSS"],
        icon: faComments
    }
];

export default projects;
