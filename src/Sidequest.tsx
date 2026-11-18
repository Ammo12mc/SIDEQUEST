import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type Challenge = {
  id: number;
  course?: string;
  name: string;
  skill: string;
  learn: string;
  example: string;
  task: string;
  requirements: string[];
  tip: string;
};

const courses = [
  {
    name: 'Digital Survivor',
    colour: '#2878D0',
    description: 'Master the digital world',
    symbol: 'computer',
  },
  {
    name: 'Money Matters',
    colour: '#E69A35',
    description: 'Learn to manage money',
    symbol: 'coin',
  },
  {
    name: 'Social XP',
    colour: '#A16BE0',
    description: 'Build communication skills',
    symbol: 'speech',
  },
  {
    name: 'LifeCraft',
    colour: '#55B68B',
    description: 'Handle everyday life',
    symbol: 'house',
  },
  {
    name: 'Ready Player One',
    colour: '#D66A54',
    description: 'Prepare for real situations',
    symbol: 'shield',
  },
];

const challenges: Challenge[] = [
  {
    id: 1,
    name: 'Password Forge',
    skill: 'Creating strong passwords',
    learn:
      'Passwords protect your online accounts. A weak or reused password can make it easier for someone to access your information. Strong passwords should be long, unique and difficult to guess.',
    example:
      'A password like cat123 is easy to guess. A longer combination of unrelated words and different characters is much harder to predict.',
    task: 'Create a made-up practice password. Never enter a real password that you use for an account.',
    requirements: [
      'At least 12 characters',
      'An uppercase and lowercase letter',
      'A number or symbol',
    ],
    tip: 'A password manager can help you create and store unique passwords.',
  },
  {
    id: 2,
    name: 'Scam Scanner',
    skill: 'Recognising online scams',
    learn:
      'Scams are attempts to trick people into giving away money or personal information. They often use urgency, exciting prizes or frightening warnings.',
    example:
      'A message claims you won a free phone but asks for a delivery fee. The unexpected prize and payment request are warning signs.',
    task: 'Review the warning signs of a suspicious message.',
    requirements: [
      'Notice unexpected prizes or offers',
      'Look for pressure to act quickly',
      'Check requests for money or personal details',
    ],
    tip: "Verify suspicious messages through an organisation's official website.",
  },
  {
    id: 3,
    name: 'Phishing Hunter',
    skill: 'Identifying suspicious links',
    learn:
      'Phishing is when someone pretends to be a trusted organisation to steal information. Fake emails and websites may look convincing.',
    example:
      'An email claims to be from a bank but links to a misspelt website. That mismatch is a warning sign.',
    task: 'Inspect a fictional email and identify suspicious details.',
    requirements: [
      'Check who sent the message',
      'Inspect the website address',
      'Avoid unexpected login links',
    ],
    tip: 'Open the official website yourself instead of following an unexpected login link.',
  },
  {
    id: 4,
    name: 'Privacy Shield',
    skill: 'Protecting personal information',
    learn:
      'Your digital footprint is the information about you that builds up online. Posts, photos and location details can be shared or saved by others.',
    example:
      'A photo with your school ID visible may reveal information you did not intend to share.',
    task: 'Review a fictional social profile and identify details to keep private.',
    requirements: [
      'Recognise personal information',
      'Check photo backgrounds',
      'Understand privacy settings',
    ],
    tip: 'Think about who could see a post before sharing it.',
  },
  {
    id: 5,
    name: 'File Sorter',
    skill: 'Organising digital files',
    learn:
      'Good file organisation saves time and prevents important work from getting lost. Descriptive names and folders make documents easier to find.',
    example:
      'A folder called School can contain separate folders for Maths, Science and English.',
    task: 'Plan a folder structure for your schoolwork.',
    requirements: [
      'Create clear folder categories',
      'Use descriptive file names',
      'Keep related documents together',
    ],
    tip: 'Use dates or project names when saving versions of important files.',
  },
  {
    id: 6,
    name: 'Link Detective',
    skill: 'Checking website reliability',
    learn:
      'Not every website is reliable. A professional-looking design does not guarantee that information is accurate or genuine.',
    example:
      'A health claim on an unknown website should be checked against reliable sources.',
    task: 'Evaluate a fictional website using a reliability checklist.',
    requirements: [
      'Check who published the information',
      'Look for supporting evidence',
      'Compare reliable sources',
    ],
    tip: 'Look for the original source rather than trusting a forwarded post.',
  },
  {
    id: 7,
    name: 'Digital Survivor',
    skill: 'Combining digital safety skills',
    learn:
      'Digital safety involves several habits working together: protecting accounts, checking information, keeping personal details private and thinking before clicking.',
    example:
      'A suspicious message asks for account details through an unfamiliar link. A safe response is to avoid the link and verify the message independently.',
    task: 'Complete a digital safety review using everything you have learnt.',
    requirements: [
      'Identify suspicious messages',
      'Protect personal information',
      'Choose safe account habits',
    ],
    tip: 'Pause, check and verify before taking action online.',
  },
];
const extraChallenges: Challenge[] = [
  // MONEY MATTERS
  {
    id: 8, course: 'Money Matters',
    name: 'Budget Builder', skill: 'Budgeting',
    learn: 'A budget is a plan for how to use your money. It helps you balance what you receive with what you spend.',
    example: 'If you receive ₹500, you could save ₹100 and use the rest for planned expenses.',
    task: 'Create a simple budget for ₹500.',
    requirements: ['Set aside some savings', 'Plan your spending', 'Make sure your total is ₹500'],
    tip: 'Give every rupee a purpose.'
  },
  {
    id: 9, course: 'Money Matters',
    name: 'Needs vs Wants', skill: 'Smart spending',
    learn: 'Needs are things essential for daily life. Wants are things you would enjoy having but can manage without.',
    example: 'A school notebook is a need. A decorative notebook may be a want.',
    task: 'List three needs and three wants.',
    requirements: ['Identify three needs', 'Identify three wants', 'Explain one difference'],
    tip: 'Think before you spend.'
  },
  {
    id: 10, course: 'Money Matters',
    name: 'Savings Quest', skill: 'Saving',
    learn: 'Saving means keeping aside some money instead of spending it immediately.',
    example: 'Saving ₹50 each week gives you ₹200 in four weeks.',
    task: 'Make a four-week savings plan.',
    requirements: ['Choose a weekly amount', 'Calculate the total', 'Choose a savings goal'],
    tip: 'Small amounts add up.'
  },
  {
    id: 11, course: 'Money Matters',
    name: 'Discount Detective', skill: 'Percentage calculations',
    learn: 'A discount reduces the original price of an item.',
    example: 'A 10% discount on ₹500 saves you ₹50.',
    task: 'Calculate the discount and final price of a ₹800 item with a 15% discount.',
    requirements: ['Calculate 15% of ₹800', 'Subtract the discount', 'Write the final price'],
    tip: 'Check the final price, not just the discount.'
  },
  {
    id: 12, course: 'Money Matters',
    name: 'Bank Basics', skill: 'Banking awareness',
    learn: 'Banks help people store money, make payments and save for future needs.',
    example: 'A savings account lets you deposit and withdraw money.',
    task: 'Explain three things a bank helps people do.',
    requirements: ['Name three banking services', 'Explain one service', 'Give an example'],
    tip: 'Understand a service before using it.'
  },
  {
    id: 13, course: 'Money Matters',
    name: 'Scam Alert', skill: 'Financial safety',
    learn: 'Scammers may use fake messages, calls or websites to trick people into sharing money or private information.',
    example: 'A message claiming you won a prize but asking for a payment first is suspicious.',
    task: 'Write three warning signs of a financial scam.',
    requirements: ['Identify three warning signs', 'Explain why they are suspicious', 'Suggest a safe response'],
    tip: 'Never share an OTP or PIN.'
  },
  {
    id: 14, course: 'Money Matters',
    name: 'Money Master', skill: 'Financial decision-making',
    learn: 'Good money decisions involve planning, comparing choices and thinking about future needs.',
    example: 'Comparing two products can help you choose better value.',
    task: 'Plan how you would manage a monthly allowance.',
    requirements: ['Plan spending', 'Include savings', 'Explain your choices'],
    tip: 'Plan first, spend later.'
  },

  // SOCIAL XP
  {
    id: 15, course: 'Social XP',
    name: 'Active Listener', skill: 'Listening',
    learn: 'Active listening means giving someone your attention and understanding what they are saying.',
    example: 'You can show you are listening by asking a relevant follow-up question.',
    task: 'Practise summarising what someone tells you.',
    requirements: ['Listen without interrupting', 'Summarise their point', 'Ask one relevant question'],
    tip: 'Listen to understand, not just to reply.'
  },
  {
    id: 16, course: 'Social XP',
    name: 'Clear Communicator', skill: 'Communication',
    learn: 'Clear communication means sharing ideas in a way others can easily understand.',
    example: 'Giving instructions in short, ordered steps makes them easier to follow.',
    task: 'Explain how to complete a simple everyday task.',
    requirements: ['Use clear language', 'Put steps in order', 'Avoid unnecessary details'],
    tip: 'Keep it simple and specific.'
  },
  {
    id: 17, course: 'Social XP',
    name: 'Team Player', skill: 'Teamwork',
    learn: 'Teamwork means contributing, sharing responsibilities and respecting other ideas.',
    example: 'In a group project, different people can research, design and present.',
    task: 'Plan how a team of three could complete a project.',
    requirements: ['Assign three roles', 'Share responsibilities', 'Include a way to communicate'],
    tip: 'A good team uses everyone’s strengths.'
  },
  {
    id: 18, course: 'Social XP',
    name: 'Conflict Resolver', skill: 'Conflict resolution',
    learn: 'Conflict resolution means dealing with disagreements calmly and fairly.',
    example: 'Two people who want the same role could discuss alternatives and take turns.',
    task: 'Suggest a fair solution to a disagreement over a group task.',
    requirements: ['Understand both sides', 'Suggest a fair solution', 'Explain why it works'],
    tip: 'Focus on solving the problem.'
  },
  {
    id: 19, course: 'Social XP',
    name: 'Public Speaker', skill: 'Speaking',
    learn: 'Public speaking is the skill of presenting ideas to an audience clearly and confidently.',
    example: 'A short introduction, three main points and a conclusion make a speech organised.',
    task: 'Prepare a one-minute speech about a hobby.',
    requirements: ['Introduce the topic', 'Share three points', 'End clearly'],
    tip: 'Practise aloud before presenting.'
  },
  {
    id: 20, course: 'Social XP',
    name: 'Perspective Switch', skill: 'Empathy',
    learn: 'Empathy means trying to understand how another person may feel or think.',
    example: 'A classmate who is quiet may be nervous rather than uninterested.',
    task: 'Describe two possible perspectives in a disagreement.',
    requirements: ['Describe the first perspective', 'Describe the second', 'Suggest an understanding response'],
    tip: 'There may be more than one side.'
  },
  {
    id: 21, course: 'Social XP',
    name: 'Social Master', skill: 'Social skills',
    learn: 'Strong social skills combine listening, communication, empathy and teamwork.',
    example: 'Working through a group disagreement requires several of these skills together.',
    task: 'Create a plan for handling a group disagreement.',
    requirements: ['Include listening', 'Include clear communication', 'Suggest a fair solution'],
    tip: 'Respect makes collaboration work.'
  },

  // LIF CRAFT
  {
    id: 22, course: 'LifeCraft',
    name: 'Time Tactician', skill: 'Time management',
    learn: 'Time management means planning tasks so that important work gets done on time.',
    example: 'You could divide an evening into study, breaks and free time.',
    task: 'Create a timetable for a school evening.',
    requirements: ['Include homework', 'Include breaks', 'Include free time'],
    tip: 'Leave some room for unexpected tasks.'
  },
  {
    id: 23, course: 'LifeCraft',
    name: 'Organisation Pro', skill: 'Organisation',
    learn: 'Being organised makes it easier to find things and remember responsibilities.',
    example: 'Keeping school books arranged by subject saves time.',
    task: 'Create a simple organisation system for your school bag.',
    requirements: ['Group similar items', 'Choose where things go', 'Make a checking routine'],
    tip: 'Everything should have a place.'
  },
  {
    id: 24, course: 'LifeCraft',
    name: 'Kitchen Starter', skill: 'Kitchen basics',
    learn: 'Kitchen skills include understanding ingredients, following instructions and maintaining cleanliness.',
    example: 'Preparing a simple sandwich involves organising ingredients and cleaning up afterwards.',
    task: 'Write the steps for preparing a simple no-cook snack.',
    requirements: ['List ingredients', 'Write steps in order', 'Include hygiene rules'],
    tip: 'Keep your workspace clean.'
  },
  {
    id: 25, course: 'LifeCraft',
    name: 'First Aid Awareness', skill: 'Safety awareness',
    learn: 'First aid is the initial help given to someone who is injured or suddenly unwell while professional help is arranged.',
    example: 'For a serious injury, alert a responsible adult and contact emergency services.',
    task: 'Create a list of three situations where you should seek adult help.',
    requirements: ['List three situations', 'Explain who to contact', 'Include emergency help'],
    tip: 'Do not attempt procedures beyond your training.'
  },
  {
    id: 26, course: 'LifeCraft',
    name: 'Problem Solver', skill: 'Problem-solving',
    learn: 'Problem-solving means understanding a situation, considering options and choosing a sensible solution.',
    example: 'If you forget a deadline, you can list what remains and make a new plan.',
    task: 'Describe a common everyday problem and create a solution.',
    requirements: ['Explain the problem', 'Suggest two options', 'Choose and explain one'],
    tip: 'Break big problems into smaller steps.'
  },
  {
    id: 27, course: 'LifeCraft',
    name: 'Smart Shopper', skill: 'Consumer awareness',
    learn: 'Smart shopping means comparing quality, price and usefulness before making a purchase.',
    example: 'A cheaper product is not always better value if it does not last.',
    task: 'Create a checklist for comparing two products.',
    requirements: ['Compare prices', 'Compare quality', 'Choose the better value'],
    tip: 'Think about value, not only price.'
  },
  {
    id: 28, course: 'LifeCraft',
    name: 'LifeCraft Master', skill: 'Everyday independence',
    learn: 'Everyday independence comes from combining organisation, planning and practical decision-making.',
    example: 'Preparing for a school trip involves planning, packing and checking timings.',
    task: 'Create a checklist for preparing for a day out.',
    requirements: ['Include essential items', 'Include timing', 'Include a final check'],
    tip: 'Preparation makes things easier.'
  },

  // READY PLAYER ONE
  {
    id: 29, course: 'Ready Player One',
    name: 'AI Investigator', skill: 'AI literacy',
    learn: 'AI tools can generate useful answers, but their output can sometimes be incorrect or misleading.',
    example: 'You can check an AI-generated fact against a trusted source.',
    task: 'Write three ways to check an AI-generated answer.',
    requirements: ['Check the source', 'Compare information', 'Look for possible errors'],
    tip: 'AI output should not be trusted blindly.'
  },
  {
    id: 30, course: 'Ready Player One',
    name: 'Research Ranger', skill: 'Research',
    learn: 'Good research involves finding reliable information and checking it against other sources.',
    example: 'A textbook and a trusted educational website can help verify a fact.',
    task: 'Make a short research plan for a topic you like.',
    requirements: ['Choose a topic', 'Identify two reliable sources', 'Record key facts'],
    tip: 'Check who created the information.'
  },
  {
    id: 31, course: 'Ready Player One',
    name: 'Creative Thinker', skill: 'Creative thinking',
    learn: 'Creative thinking means exploring different ideas and finding new ways to approach a problem.',
    example: 'A cardboard box could become a storage organiser or a model building.',
    task: 'Think of three different uses for an ordinary object.',
    requirements: ['Choose an object', 'List three uses', 'Explain the most original idea'],
    tip: 'Try looking at things differently.'
  },
  {
    id: 32, course: 'Ready Player One',
    name: 'Logic Architect', skill: 'Logical thinking',
    learn: 'Logical thinking means using facts and patterns to reach a sensible conclusion.',
    example: 'If every square has four sides and a shape is a square, it must have four sides.',
    task: 'Write a simple everyday problem and solve it using ordered steps.',
    requirements: ['State the problem', 'Show the reasoning', 'Give the conclusion'],
    tip: 'Make each step support the next.'
  },
  {
    id: 33, course: 'Ready Player One',
    name: 'Presentation Pro', skill: 'Presentation design',
    learn: 'A good presentation uses clear structure, readable text and relevant visuals.',
    example: 'One main idea per slide makes information easier to follow.',
    task: 'Plan a three-slide presentation about a hobby.',
    requirements: ['Create a title slide', 'Add key information', 'Include relevant visuals'],
    tip: 'Less text can communicate more.'
  },
  {
    id: 34, course: 'Ready Player One',
    name: 'Digital Creator', skill: 'Digital creativity',
    learn: 'Digital creation involves using technology to make original content.',
    example: 'You could create a simple poster, webpage or digital illustration.',
    task: 'Plan a small digital project.',
    requirements: ['Choose a format', 'Describe your idea', 'List the tools you need'],
    tip: 'Start with a clear idea.'
  },
  {
    id: 35, course: 'Ready Player One',
    name: 'Ready Player One', skill: 'Digital problem-solving',
    learn: 'Digital problem-solving combines research, creativity, logic and responsible technology use.',
    example: 'Planning a useful app requires understanding a problem and designing a solution.',
    task: 'Invent a simple app that solves an everyday problem.',
    requirements: ['Describe the problem', 'Explain your app idea', 'Describe three features'],
    tip: 'Build something that solves a real problem.'
  }
];
const colours = {
  bg: '#171C27',
  panel: '#263247',
  panelLight: '#34445E',
  blue: '#2878D0',
  gold: '#E69A35',
  paleGold: '#FFC45C',
  text: '#F4F0DF',
  muted: '#AAB5C5',
  border: '#101722',
  green: '#65D68B',
};

const pixelText: CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  lineHeight: 1.8,
};

const bodyText: CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  fontSize: 14,
  lineHeight: 1.8,
  color: '#D5DCE8',
};

function PixelIcon({ type, colour }: { type: string; colour: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      style={{ imageRendering: 'pixelated' }}
    >
      {type === 'computer' && (
        <>
          <rect x="5" y="7" width="38" height="27" fill={colour} />
          <rect x="10" y="12" width="28" height="17" fill="#17283F" />
          <rect x="20" y="34" width="8" height="7" fill={colour} />
          <rect x="13" y="41" width="22" height="4" fill={colour} />
          <rect x="17" y="19" width="5" height="5" fill="#FFC45C" />
          <rect x="26" y="19" width="5" height="5" fill="#FFC45C" />
        </>
      )}
      {type === 'coin' && (
        <>
          <rect x="13" y="5" width="22" height="5" fill={colour} />
          <rect x="8" y="10" width="32" height="28" fill={colour} />
          <rect x="13" y="15" width="22" height="18" fill="#17283F" />
          <rect x="20" y="15" width="8" height="18" fill="#FFC45C" />
          <rect x="13" y="38" width="22" height="5" fill={colour} />
        </>
      )}
      {type === 'speech' && (
        <>
          <rect x="5" y="7" width="38" height="27" fill={colour} />
          <rect x="11" y="13" width="26" height="15" fill="#17283F" />
          <rect x="13" y="34" width="8" height="8" fill={colour} />
          <rect x="19" y="19" width="4" height="4" fill="#FFC45C" />
          <rect x="27" y="19" width="4" height="4" fill="#FFC45C" />
        </>
      )}
      {type === 'house' && (
        <>
          <path
            d="M4 22 L24 5 L44 22 L39 27 L39 43 L9 43 L9 27 Z"
            fill={colour}
          />
          <rect x="19" y="28" width="10" height="15" fill="#17283F" />
          <rect x="12" y="25" width="6" height="6" fill="#FFC45C" />
          <rect x="31" y="25" width="6" height="6" fill="#FFC45C" />
        </>
      )}
      {type === 'shield' && (
        <>
          <path d="M24 4 L41 11 L38 31 L24 44 L10 31 L7 11 Z" fill={colour} />
          <path
            d="M24 10 L35 15 L33 29 L24 37 L15 29 L13 15 Z"
            fill="#17283F"
          />
          <rect x="21" y="16" width="6" height="16" fill="#FFC45C" />
          <rect x="16" y="21" width="16" height="6" fill="#FFC45C" />
        </>
      )}
    </svg>
  );
}

function PixelButton({
  children,
  onClick,
  colour = colours.panelLight,
  disabled = false,
}: {
  children: ReactNode;
  onClick: () => void;
  colour?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '15px',
        color: colours.text,
        background: colour,
        border: '3px solid #101722',
        boxShadow: '0 5px 0 #0C111A',
        fontFamily: "'VT323', monospace",
        fontSize: 22,
        marginBottom: 12,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

function Panel({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: colours.panel,
        border: '4px solid #101722',
        boxShadow: '0 5px 0 #0C111A, inset 3px 3px 0 rgba(255,255,255,0.06)',
        padding: 16,
        marginBottom: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function ProgressBar({ value, total }: { value: number; total: number }) {
  return (
    <div
      style={{
        background: '#101722',
        border: '3px solid #101722',
        height: 16,
        padding: 2,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(100, (value / total) * 100)}%`,
          background: colours.gold,
          transition: 'width 0.3s',
        }}
      />
    </div>
  );
}

export default function Sidequest() {
  const [started, setStarted] = useState(false);
  const[exiting, setExiting]=useState(false);
  const [page, setPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null
  );
  const [stage, setStage] = useState(0);
  const [completed, setCompleted] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('sidequest-completed');
      return saved ? JSON.parse(saved) as number[] : [];
    } catch {
      return [];
    }
  });
  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sidequest-xp');
      return saved ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });
  const [username, setUsername] = useState(() => {
    try {
      return localStorage.getItem('sidequest-username') || 'SIDEQUEST PLAYER';
    } catch {
      return 'SIDEQUEST PLAYER';
    }
  });
  const [practice, setPractice] = useState('');
  const [checks, setChecks] = useState<string[]>([]);
  useEffect(() => {
    localStorage.setItem('sidequest-completed', JSON.stringify(completed));
    localStorage.setItem('sidequest-xp', String(xp));
    localStorage.setItem('sidequest-username', username);
  }, [completed, xp, username]);
  const mutedLabel: CSSProperties = {
    color: colours.muted,
    fontFamily: "'Press Start 2P', monospace",
    fontSize: 9,
    lineHeight: 2,
  };

  const isPassword = selectedChallenge?.id === 1;
  const courseChallenges =
    selectedCourse === 'Digital Survivor'
      ? challenges
      : extraChallenges.filter(
        (challenge) => challenge.course === selectedCourse
      );

  const courseCompleted = courseChallenges.filter(
    (challenge) => completed.includes(challenge.id)
  ).length;
  const passwordValid =
    practice.length >= 12 &&
    /[A-Z]/.test(practice) &&
    /[a-z]/.test(practice) &&
    /[\d\W]/.test(practice);

  const taskReady = isPassword ? passwordValid : checks.length >= 2;

  function openChallenge(challenge: Challenge) {
    setSelectedChallenge(challenge);
    setStage(0);
    setPractice('');
    setChecks([]);
    setPage('challenge');
  }

  function completeChallenge() {
    if (!selectedChallenge || !taskReady) return;

    if (!completed.includes(selectedChallenge.id)) {
      setCompleted((previous) => [...previous, selectedChallenge.id]);
      setXp((previous) => previous + 20);
    }

    setStage(3);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, selectedCourse, selectedChallenge, stage]);

  function goHome() {
    setSelectedChallenge(null);
    setSelectedCourse('');
    setPage('home');
  }

  function toggleCheck(item: string) {
    setChecks((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item]
    );
  }

  const titleStyle: CSSProperties = {
    ...pixelText,
    color: colours.paleGold,
    fontSize: 15,
    overflowWrap: 'anywhere',
  };
  if (!started) {
    return (
      <main className={exiting? 'intro-screen intro-exit': 'intro-screen'} style={{
        minHeight: '100vh',
        background: '#101722',
        color: '#D6B96C',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 24,
        fontFamily: 'monospace',
      }}>
        <style>{`
  @keyframes titleReveal {
    from {
      opacity: 0;
      transform: translateY(25px) scale(0.9);
      text-shadow: 0 0 0 transparent;
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      text-shadow: 0 0 25px rgba(214, 185, 108, 0.5);
    }
  }

  @keyframes subtitleReveal {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes buttonPulse {
    0%, 100% { box-shadow: 0 0 0 rgba(214, 185, 108, 0); }
    50% { box-shadow: 0 0 22px rgba(214, 185, 108, 0.45); }
  }

  .intro-title {
    animation: titleReveal 1.2s ease-out both;
  }

  .intro-subtitle {
    animation: subtitleReveal 1s ease-out 0.5s both;
  }

  .intro-button {
    animation: subtitleReveal 0.8s ease-out 1s both,
               buttonPulse 2s ease-in-out 2s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .intro-title, .intro-subtitle, .intro-button {
      animation: none;
    }
  }
    @keyframes floatStar {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(15deg);
  }
}
  @keyframes screenFade {
  from {
    opacity: 0;
    background-color: #050910;
  }
  to {
    opacity: 1;
    background-color: #101722;
  }
}

.intro-screen {
  animation: screenFade 1.2s ease-out both;
}
  @keyframes introExit {
  to {
    opacity: 0;
    transform: scale(1.04);
  }
}

.intro-screen.intro-exit {
  animation: introExit 0.8s ease-in forwards !important;
}

@keyframes introExit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.04);
  }
}
`}</style>
<div style={{
  position: 'absolute',
  top: '22%',
  left: '15%',
  fontSize: 25,
  color: '#D6B96C',
  animation: 'floatStar 3s ease-in-out infinite',
}}>✦</div>

<div style={{
  position: 'absolute',
  top: '30%',
  right: '17%',
  fontSize: 18,
  color: '#6FA8DC',
  animation: 'floatStar 4s ease-in-out infinite 0.5s',
}}>★</div>
        <h1 className="intro-title" style={{
  fontSize: 48,
  letterSpacing: 5,
  marginBottom: 15,
}}>
  SIDEQUEST<span style={{ color: '#6FA8DC' }}>.</span>
</h1>

        <p className="intro-subtitle" style={{
  color: '#FFFFFF',
  fontSize: 15,
  letterSpacing: 1,
}}>
  Your next skill starts here.
</p>

        <button
  className="intro-button"
  onClick={() => {
    setExiting(true);
    setTimeout(() => setStarted(true), 800);
  }}
  style={{
    marginTop: 35,
    padding: '16px 40px',
    background: '#D6B96C',
    color: '#101722',
    border: 'none',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease'
  }}
>
  START QUEST →
</button>
            marginTop: 35,
            padding: '16px 40px',
            background: '#D6B96C',
            color: '#101722',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.3s ease'
          }}
        >
          START QUEST →
        </button>
      </main>
    );
  
}
return (
  <main
    style={{
      minHeight: '100vh',
      background: colours.bg,
      color: colours.text,
      padding: '16px 14px 100px',
      fontFamily: "'VT323', monospace",
      fontSize: 20,
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: 480,
      margin: '0 auto',
      position: 'relative',
    }}
  >

    <style>{`
        @media (min-width: 700px) {
          body {
            background-color: #101722;
            background-image: radial-gradient(#29384A 1px, transparent 1px);
            background-size: 24px 24px;
          }

          main::before,
          main::after {
            content: "SIDEQUEST";
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            color: #D6B96C;
            font-family: monospace;
            font-size: 11px;
            letter-spacing: 3px;
            writing-mode: vertical-rl;
            opacity: 0.5;
            pointer-events: none;
          }

          main::before { left: 35px; }
          main::after { right: 35px; }
        }
        @media (min-width: 700px) {
          main {
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.35);
          }

          body::before,
          body::after {
            position: fixed;
            color: #D6B96C;
            font-family: monospace;
            font-size: 32px;
            opacity: 0.2;
            pointer-events: none;
          }

          body::before {
            content: "★";
            top: 18%;
            left: 13%;
          }

          body::after {
            content: "✦";
            bottom: 18%;
            right: 13%;
          }
        }
        button {
          transition: filter 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          -webkit-tap-highlight-color: transparent;
        }

        button:not(:disabled):hover {
          filter: brightness(1.2);
        }

        button:not(:disabled):active {
          filter: brightness(1.4);
          transform: translateY(3px) scale(0.97) !important;
          box-shadow: 0 1px 0 #0C111A !important;
        }

        button:focus-visible {
          outline: 3px solid #FFC45C;
          outline-offset: 3px;
        }

        button:disabled {
          cursor: not-allowed;
        }
      `}</style>
    {/* HEADER */}
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '3px solid #34445E',
        paddingBottom: 14,
        marginBottom: 20,
      }}
    >

      <div>
        <div style={{ ...mutedLabel, fontSize: 7 }}>
          By Amogh Acharjee And Prabhav Kanoi
        </div>
      </div>
      <div
        style={{
          background: '#263247',
          border: '3px solid #101722',
          padding: '8px 12px',
          color: colours.paleGold,
          fontSize: 20,
        }}
      >
        ★ {xp} XP
      </div>
    </header>

    {/* HOME */}
    {page === 'home' && (
      <>
        <Panel style={{ padding: 0, overflow: 'hidden' }}>
          <p style={{ color: 'white' }}>
          </p>
          <div style={{
            background: '#1B2637',
            borderBottom: '3px solid #101722',
            padding: '20px 16px',
            textAlign: 'center',
          }}>
            <div style={{
              ...pixelText,
              color: colours.paleGold,
              fontSize: 18,
            }}>
              SIDEQUEST<span style={{ color: colours.blue }}>.</span>
            </div>

            <div style={{
              ...mutedLabel,
              color: colours.green,
              marginTop: 8,
            }}>
              REAL SKILLS. SIDE QUESTS.
            </div>

            <div style={{
              ...bodyText,
              marginTop: 8,
            }}>
              A new way to level up your real life.
            </div>
          </div>
          <div style={{ padding: 18 }}>
            <div style={{ ...mutedLabel, color: colours.gold }}>
              YOUR ADVENTURE BEGINS
            </div>
            <h1
              style={{
                ...pixelText,
                fontSize: 22,
                lineHeight: 1.7,
                margin: '14px 0',
              }}
            >
              LEVEL UP
              <br />
              YOUR REAL
              <br />
              <span style={{ color: colours.paleGold }}>LIFE.</span>
            </h1>
            <p style={{ ...bodyText, marginBottom: 14 }}>
              Learn useful skills. Complete quests. Unlock achievements.
            </p>
            <div
              style={{
                display: 'inline-block',
                background: colours.blue,
                border: '3px solid #101722',
                padding: '8px 12px',
                ...pixelText,
                fontSize: 9,
              }}
            >
              PLAYER LEVEL 1
            </div>
          </div>
        </Panel>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          <Panel>
            <div style={mutedLabel}>TOTAL XP</div>
            <div style={{ ...titleStyle, fontSize: 25 }}>{xp}</div>
          </Panel>
          <Panel>
            <div style={mutedLabel}>QUESTS DONE</div>
            <div style={{ ...titleStyle, fontSize: 25 }}>
              {completed.length}/35
            </div>
          </Panel>
        </div>

        <Panel>
          <div style={mutedLabel}>PLAYER PROGRESS</div>
          <div style={{ margin: '12px 0' }}>
            <ProgressBar value={completed.length} total={35} />
          </div>
          <div style={{ color: colours.muted, fontSize: 17 }}>
            {completed.length} of 35 quests completed
          </div>
        </Panel>

        <h2 style={titleStyle}>QUEST WORLDS</h2>
        <p style={mutedLabel}>CHOOSE YOUR NEXT ADVENTURE</p>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 110px)",
            gridTemplateRows: "repeat(3, 110px)",
            gap: "18px",
            justifyContent: "center",
            padding: "20px 10px"
          }}
        >
          <svg
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "366px",
              height: "366px",
              pointerEvents: "none",
              zIndex: 0
            }}
            viewBox="0 0 366 366"
          >
            <g fill="none" strokeLinecap="square" strokeLinejoin="miter">
              {/* Dark borders */}
              <g stroke="#020000" strokeWidth="20">
                <path d="M160 128 V55 H110" />
                <path d="M206 128 V82 H256" />
                <path d="M160 183 H65 V296" />
                <path d="M183 238 V311 H256" />
              </g>

              {/* Inner lines */}
              <g stroke="#718096" strokeWidth="10">
                <path d="M160 128 V55 H110" />
                <path d="M206 128 V82 H256" />
                <path d="M160 183 H65 V296" />
                <path d="M183 238 V311 H256" />
              </g>
            </g>
          </svg>
          {courses.map((course) => (
            <button
              key={course.name}
              onClick={() => {
                setSelectedCourse(course.name);
                setPage('course');
              }}
              style={{
                background: '#30394a',
                border: '4px solid #101722',
                borderRadius: '3px',
                boxShadow:
                  '0 6px 0 #0c111a, inset 3px 3px 0 #526078, inset -3px -3px 0 #222b3b',
                padding: '18px',
                color: '#f4f0df',
                textAlign: 'center',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                gridColumn:
                  course.name === "Digital Survivor" || course.name === "LifeCraft" ? "1" :
                    course.name === "Money Matters" || course.name === "Ready Player One" ? "3" : "2",
                gridRow:
                  course.name === "Digital Survivor" ? "1" :
                    course.name === "Money Matters" ? "1" :
                      course.name === "Social XP" ? "2" :
                        course.name === "LifeCraft" ? "3" : "3",
                position: 'relative',
                transform:
                  course.name === "Money Matters" ? "translateY(27px)" :
                    course.name === "LifeCraft" ? "translateY(-15px)" :
                      "none",
              }}
            >
              <PixelIcon type={course.symbol} colour={course.colour} />
              <div style={{ fontSize: '14px', marginTop: '5px' }}>
                {course.name}
              </div>
              <span style={{ color: colours.paleGold, fontSize: 24 }}>›</span>
            </button>
          ))}
        </div>
      </>
    )}

    {/* COURSE PAGE */}
    {page === 'course' && (
      <>
        <PixelButton onClick={goHome}>← BACK HOME</PixelButton>

        <div style={{ ...mutedLabel, marginTop: 20 }}>QUEST WORLD</div>
        <h1 style={titleStyle}>{selectedCourse}</h1>

        <Panel>
          <div style={mutedLabel}>WORLD PROGRESS</div>
          <h2 style={titleStyle}>{courseCompleted}/7</h2>
          <ProgressBar value={courseCompleted} total={7} />
          <p style={{ ...bodyText, marginTop: 10 }}>
            {courseCompleted} of 7 quests completed
          </p>
        </Panel>

        <h3 style={titleStyle}>AVAILABLE QUESTS</h3>

        {courseChallenges.map((challenge) => (
          <button
            key={challenge.id}
            onClick={() => openChallenge(challenge)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              textAlign: 'left',
              padding: 14,
              marginBottom: 12,
              background: colours.panel,
              color: colours.text,
              border: `3px solid ${completed.includes(challenge.id)
                  ? colours.green
                  : '#101722'
                }`,
              boxShadow: '0 4px 0 #0C111A',
            }}
          >
            <span
              style={{
                color: completed.includes(challenge.id)
                  ? colours.green
                  : colours.gold,
                fontSize: 25,
              }}
            >
              {completed.includes(challenge.id) ? '✓' : '◆'}
            </span>

            <span style={{ flex: 1 }}>
              <span style={{ display: 'block', fontSize: 21 }}>
                {challenge.name}
              </span>
              <span style={{ color: colours.muted, fontSize: 16 }}>
                +20 XP
              </span>
            </span>

            <span style={{ color: colours.paleGold }}>›</span>
          </button>
        ))}
      </>
    )}
    {/* CHALLENGE PAGE */}
    {page === 'challenge' && selectedChallenge && (
      <>
        <PixelButton onClick={() => setPage('course')}>
          ← BACK TO QUESTS
        </PixelButton>

        <div style={{ ...mutedLabel, marginTop: 20 }}>
          {selectedCourse.toUpperCase()} / QUEST {selectedChallenge.id}
        </div>
        <h1 style={titleStyle}>{selectedChallenge.name}</h1>

        <Panel>
          <div style={mutedLabel}>SKILL TO UNLOCK</div>
          <p style={{ color: colours.paleGold, fontSize: 20 }}>
            {selectedChallenge.skill}
          </p>
        </Panel>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 5,
            margin: '20px 0',
          }}
        >
          {['LEARN', 'EXAMPLE', 'PRACTISE', 'DONE'].map((name, i) => (
            <div
              key={name}
              style={{
                textAlign: 'center',
                padding: '9px 2px',
                background: i <= stage ? '#285B8F' : colours.panel,
                border: `3px solid ${i <= stage ? colours.blue : '#101722'}`,
                fontSize: 13,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <Panel>
          {stage === 0 && (
            <>
              <div style={{ ...mutedLabel, color: colours.gold }}>
                01 / LEARN
              </div>
              <h2 style={titleStyle}>UNDERSTAND THE SKILL</h2>
              <p style={bodyText}>{selectedChallenge.learn}</p>
              <div
                style={{
                  background: '#1B2637',
                  padding: 13,
                  borderLeft: `5px solid ${colours.gold}`,
                }}
              >
                <div style={{ ...mutedLabel, color: colours.gold }}>
                  WHY IT MATTERS
                </div>
                <p style={bodyText}>
                  This skill helps you make better decisions in everyday life.
                </p>
              </div>
            </>
          )}

          {stage === 1 && (
            <>
              <div style={{ ...mutedLabel, color: colours.gold }}>
                02 / EXAMPLE
              </div>
              <h2 style={titleStyle}>SEE IT IN ACTION</h2>
              <p style={bodyText}>{selectedChallenge.example}</p>
              <div
                style={{
                  background: '#1B2637',
                  padding: 15,
                  border: '3px dashed #52627B',
                }}
              >
                <div style={{ ...mutedLabel, color: colours.gold }}>
                  PRO TIP
                </div>
                <p style={bodyText}>{selectedChallenge.tip}</p>
              </div>
            </>
          )}

          {stage === 2 && (
            <>
              <div style={{ ...mutedLabel, color: colours.gold }}>
                03 / PRACTISE
              </div>
              <h2 style={titleStyle}>YOUR MISSION</h2>
              <p style={bodyText}>{selectedChallenge.task}</p>

              {isPassword ? (
                <>
                  <label style={{ color: colours.gold, fontSize: 17 }}>
                    BUILD A PRACTICE PASSWORD
                  </label>
                  <input
                    type="text"
                    value={practice}
                    onChange={(e) => setPractice(e.target.value)}
                    placeholder="Make up a password..."
                    autoComplete="off"
                    style={{
                      width: '100%',
                      padding: 13,
                      marginTop: 10,
                      background: '#111A28',
                      color: 'white',
                      border: '3px solid #52627B',
                      boxSizing: 'border-box',
                      fontSize: 19,
                    }}
                  />
                  <p style={{ color: colours.muted, fontSize: 16 }}>
                    Use a made-up password, never a real account password.
                  </p>
                  {selectedChallenge.requirements.map((item, i) => {
                    const valid =
                      i === 0
                        ? practice.length >= 12
                        : i === 1
                          ? /[A-Z]/.test(practice) && /[a-z]/.test(practice)
                          : /[\d\W]/.test(practice);

                    return (
                      <div
                        key={item}
                        style={{
                          padding: '8px 0',
                          color: valid ? colours.green : colours.muted,
                          fontSize: 18,
                        }}
                      >
                        {valid ? '✓ ' : '□ '}
                        {item}
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <p style={{ color: colours.gold, fontSize: 17 }}>
                    COMPLETE AT LEAST TWO STEPS
                  </p>
                  {selectedChallenge.requirements.map((item) => (
                    <label
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: 12,
                        borderBottom: '1px solid #46536A',
                        color: '#D5DCE8',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: 14,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checks.includes(item)}
                        onChange={() => toggleCheck(item)}
                      />
                      {item}
                    </label>
                  ))}
                </>
              )}

              <div
                style={{
                  color: taskReady ? colours.green : colours.gold,
                  fontSize: 17,
                  marginTop: 15,
                }}
              >
                {taskReady
                  ? '✓ MISSION REQUIREMENTS MET'
                  : 'MISSION IN PROGRESS...'}
              </div>
            </>
          )}

          {stage === 3 && (
            <>
              <div style={{ ...mutedLabel, color: colours.green }}>
                04 / COMPLETE
              </div>
              <h2 style={{ ...titleStyle, color: colours.green }}>
                QUEST COMPLETED!
              </h2>
              <div
                style={{
                  textAlign: 'center',
                  padding: 20,
                  background: '#1B2637',
                  margin: '15px 0',
                }}
              >
                <div style={{ fontSize: 48, color: colours.gold }}>★</div>
                <h1 style={{ ...titleStyle, fontSize: 30 }}>+20 XP</h1>
                <div style={mutedLabel}>SKILL UNLOCKED</div>
              </div>
              <p style={bodyText}>
                You've completed {selectedChallenge.name} and practised{' '}
                {selectedChallenge.skill.toLowerCase()}.
              </p>
              <PixelButton
                onClick={() => setPage('course')}
                colour={colours.blue}
              >
                RETURN TO QUESTS →
              </PixelButton>
            </>
          )}
        </Panel>

        {stage < 2 && (
          <PixelButton
            onClick={() => setStage(stage + 1)}
            colour={colours.blue}
          >
            CONTINUE →
          </PixelButton>
        )}

        {stage === 2 && (
          <PixelButton
            onClick={completeChallenge}
            colour={colours.blue}
            disabled={!taskReady}
          >
            COMPLETE QUEST ★
          </PixelButton>
        )}
      </>
    )}

    {/* ADVANCEMENTS */}
    {page === 'advancements' && (
      <>
        <div style={mutedLabel}>YOUR PROGRESSION</div>
        <h1 style={titleStyle}>ADVANCEMENTS</h1>
        <p style={bodyText}>
          Complete quests to unlock achievements and explore your progress.
        </p>

        <Panel>
          <div style={mutedLabel}>TOTAL PROGRESS</div>
          <h2 style={titleStyle}>{completed.length}/35 QUESTS</h2>
          <ProgressBar value={completed.length} total={35} />
        </Panel>
        <h2 style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '16px',
          color: '#FFC45C',
          textAlign: 'center',
          letterSpacing: '2px',
          margin: '28px 0 22px',
          textShadow: '3px 3px 0 #101722',
          borderTop: '3px solid #E69A35',
          borderBottom: '3px solid #E69A35',
          padding: '16px 8px'
        }}>
          WORLD ACHIEVEMENTS
        </h2>
        {[
          {
            world: 'DIGITAL SURVIVOR',
            start: 1,
            achievements: [
              { name: 'First Steps', detail: 'Complete your first digital quest', requirement: 1 },
              { name: 'Digital Explorer', detail: 'Complete three digital quests', requirement: 3 },
              { name: 'Cyber Guardian', detail: 'Complete all seven digital quests', requirement: 7 },
            ],
          },
          {
            world: 'MONEY MATTERS',
            start: 8,
            achievements: [
              { name: 'First Coins', detail: 'Complete your first money quest', requirement: 1 },
              { name: 'Smart Saver', detail: 'Complete three money quests', requirement: 3 },
              { name: 'Money Master', detail: 'Complete all seven money quests', requirement: 7 },
            ],
          },
          {
            world: 'SOCIAL XP',
            start: 15,
            achievements: [
              { name: 'First Connection', detail: 'Complete your first social quest', requirement: 1 },
              { name: 'Team Player', detail: 'Complete three social quests', requirement: 3 },
              { name: 'Social Master', detail: 'Complete all seven social quests', requirement: 7 },
            ],
          },
          {
            world: 'LIFECRAFT',
            start: 22,
            achievements: [
              { name: 'Getting Started', detail: 'Complete your first LifeCraft quest', requirement: 1 },
              { name: 'Everyday Expert', detail: 'Complete three LifeCraft quests', requirement: 3 },
              { name: 'LifeCraft Master', detail: 'Complete all seven LifeCraft quests', requirement: 7 },
            ],
          },
          {
            world: 'READY PLAYER ONE',
            start: 29,
            achievements: [
              { name: 'Player One', detail: 'Complete your first quest', requirement: 1 },
              { name: 'Skill Builder', detail: 'Complete three quests', requirement: 3 },
              { name: 'Ready Player One', detail: 'Complete all seven quests', requirement: 7 },
            ],
          },
        ].map((world) => {
          const worldCompleted = completed.filter(
            (id) => id >= world.start && id <= world.start + 6
          ).length;
          const worldCleared = worldCompleted === 7;
          const worldProgress = `${worldCompleted}/7 QUESTS COMPLETED`;
          return (
            <div key={world.world}>
              <h3 style={titleStyle}>{world.world}</h3>
              {worldCleared && (
                <div style={{ color: colours.gold, fontWeight: 'bold', marginBottom: 12 }}>
                  ★ WORLD CLEARED! ★
                </div>
              )}
              <div style={mutedLabel}>
                {worldProgress}
              </div>
              <div
                style={{
                  borderLeft: '4px solid #46536A',
                  marginLeft: 15,
                  paddingLeft: 15,
                }}
              >
                {world.achievements.map((achievement) => {
                  const unlocked = worldCompleted >= achievement.requirement;

                  return (
                    <Panel
                      key={achievement.name}
                      style={{
                        borderColor: unlocked ? colours.gold : '#101722',
                        opacity: unlocked ? 1 : 0.65,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 25,
                          color: unlocked ? colours.gold : colours.muted,
                        }}
                      >
                        {unlocked ? '★' : '◇'}
                      </div>
                      <h3 style={{ color: unlocked ? colours.gold : colours.muted }}>
                        {achievement.name}
                      </h3>
                      <p style={{ ...bodyText, fontSize: 13 }}>
                        {achievement.detail}
                      </p>
                      <div style={mutedLabel}>
                        {unlocked ? '★ UNLOCKED!' : '◇ LOCKED'}
                      </div>
                    </Panel>
                  );
                })}
              </div>
            </div>
          );
        })}
        <h3 style={titleStyle}>XP MILESTONES</h3>
        {[100, 250, 500].map((value) => (
          <Panel
            key={value}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ color: colours.gold }}>★ {value} XP</div>
              <div style={mutedLabel}>
                {xp >= value ? 'REWARD UNLOCKED!' : `${value - xp} XP TO GO`}
              </div>
              <div style={{ color: colours.muted, fontSize: 15 }}>
                EXPERIENCE MILESTONE
              </div>
            </div>
            <div
              style={{
                color: xp >= value ? colours.green : colours.muted,
                fontSize: 16,
              }}
            >
              {xp >= value ? 'UNLOCKED ✓' : 'LOCKED ◇'}
            </div>
          </Panel>
        ))}
      </>
    )}

    {/* PROFILE */}
    {page === 'profile' && (
      <>
        <div style={mutedLabel}>PLAYER PROFILE</div>
        <h1 style={titleStyle}>YOUR STATS</h1>

        <Panel style={{ textAlign: 'center', padding: 25 }}>
          <div style={{ fontSize: 50, color: colours.gold }}>♟</div>
          <h2 style={titleStyle}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              maxLength={18}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: `2px solid ${colours.gold}`,
                color: colours.text,
                fontFamily: 'inherit',
                fontSize: 16,
                textAlign: 'center',
                display: 'block',
                width: '100%',
                outline: 'none',
              }}
            />
          </h2>
          <div style={mutedLabel}></div>
        </Panel>

        {[
          ['TOTAL XP', `${xp}`],
          ['QUESTS COMPLETED', `${completed.length}/35`],
          ['WORLDS EXPLORED', `${[
            completed.some((id) => id >= 1 && id <= 7),
            completed.some((id) => id >= 8 && id <= 14),
            completed.some((id) => id >= 15 && id <= 21),
            completed.some((id) => id >= 22 && id <= 28),
            completed.some((id) => id >= 29 && id <= 35),
          ].filter(Boolean).length}/5`],
          ['COURSES AVAILABLE', '5'],
        ].map(([label, value]) => (
          <Panel
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={mutedLabel}>{label}</span>
            <strong style={{ color: colours.gold }}>{value}</strong>
          </Panel>
        ))}
      </>
    )}

    {/* BOTTOM NAVIGATION */}
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#111925',
        borderTop: '4px solid #34445E',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '9px 5px',
        zIndex: 10,
      }}
    >
      {[
        { id: 'home', icon: '⌂', label: 'HOME' },
        { id: 'advancements', icon: '✧', label: 'ADVANCEMENTS' },
        { id: 'profile', icon: '♟', label: 'PROFILE' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setSelectedChallenge(null);
            setSelectedCourse('');
            setPage(item.id);
          }}
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: page === item.id ? colours.paleGold : colours.muted,
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 8,
            padding: 5,
          }}
        >
          <div style={{ fontSize: 23, marginBottom: 5 }}>{item.icon}</div>
          {item.label}
        </button>
      ))}
    </nav>
  </main>
);
}