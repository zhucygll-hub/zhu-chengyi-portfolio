export type ProjectCategory = "ai-lab" | "featured" | "visual-3d";

export type Project = {
  slug: string;
  title: string;
  englishTitle?: string;
  category: ProjectCategory;
  type: string;
  time: string;
  summary: string;
  keywords: string[];
  tools: string[];
  heroImage: string;
  galleryImages?: { src: string; label: string; aspect?: string }[];
  accent: string;
  sections: {
    background: string;
    problem: string;
    goal: string;
    process: string[];
    solution: string;
    prototype: string;
    outcome: string;
  };
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const categoryMeta: Record<
  ProjectCategory,
  { title: string; description: string }
> = {
  "ai-lab": {
    title: "AI Design Lab",
    description:
      "AI 工具链、设计流程与前端原型实验，关注从灵感生成到产品验证的完整路径。"
  },
  featured: {
    title: "Featured Design Projects",
    description:
      "完整产品设计与空间设计项目，覆盖用户洞察、概念推导、模型表达与方案呈现。"
  },
  "visual-3d": {
    title: "Visual & 3D Skills",
    description:
      "基础造型、渲染与手绘能力，用于支撑产品概念的清晰表达。"
  }
};

export const projects: Project[] = [
  {
    slug: "sensebath",
    title: "Sensebath / BUTR Sense One",
    category: "featured",
    type: "Inclusive Product Design / Tactile Interaction",
    time: "2024",
    summary: "面向视障人群的触觉沐浴套装设计。",
    keywords: ["视障用户", "触觉反馈", "沐浴安全", "无障碍设计"],
    tools: ["User Research", "Rhino", "KeyShot", "Photoshop", "Inclusive Design"],
    heroImage: "/images/projects/sensebath/web-hero.png",
    galleryImages: [
      {
        src: "/images/projects/sensebath/web-core-insight.png",
        label: "Sensebath 网页：核心洞察",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/sensebath/web-value-proposition.png",
        label: "Sensebath 网页：价值主张",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/sensebath/web-product-views.png",
        label: "Sensebath 网页：单品展示",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/sensebath/web-safety-design.png",
        label: "Sensebath 网页：防误操作设计",
        aspect: "aspect-[16/9]"
      }
    ],
    accent: "Tactile Safety",
    sections: {
      background:
        "沐浴是高度依赖空间判断和温度感知的日常行为。对于视障用户来说，瓶身识别、用量控制、湿滑环境和热水判断都会放大安全风险。",
      problem:
        "常规洗护产品主要依靠视觉标签和颜色区分，用户在浴室中需要反复触摸、确认和记忆，操作负担较高。",
      goal:
        "建立一套可以被触觉直接读取的沐浴产品系统，让识别、抓握、出液和安全判断更清晰。",
      process: [
        "拆解视障用户在沐浴场景中的动作路径，标记高风险节点。",
        "将瓶身、按压、纹理和摆放方向转化为触觉信息层级。",
        "通过模型比例和接触面细节推敲湿手环境下的握持稳定性。"
      ],
      solution:
        "方案以触觉编码和防滑结构为核心，通过不同纹理、轮廓和按压反馈区分产品功能，并用统一的套装逻辑减少记忆成本。",
      prototype:
        "详情页预留横向主视觉、触觉纹理局部放大、使用流程图和套装陈列图，后续可替换为 Rhino 模型与 KeyShot 渲染。",
      outcome:
        "项目强化了我对包容性设计的理解，也让我开始把产品细节视为可被感知、可被学习的交互语言。"
    }
  },
  {
    slug: "zero-square-gate",
    title: "零号方闸",
    englishTitle: "Zero Square Gate",
    category: "featured",
    type: "Urban Micro Mobility / Spatial Design",
    time: "2024",
    summary:
      "面向大零号湾科创园区的非机动车停车棚设计，通过人车分流、智慧停放、金属格栅立面和低碳策略，将消极停放点转化为绿色出行节点。",
    keywords: ["非机动车", "城市微出行", "空间动线", "智慧停放"],
    tools: ["Site Analysis", "Rhino", "Enscape", "Photoshop", "Illustrator"],
    heroImage: "/images/projects/zero-square-gate/hero.png",
    galleryImages: [
      {
        src: "/images/projects/zero-square-gate/day-view.png",
        label: "日景效果图：城市微出行节点",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/zero-square-gate/night-view.png",
        label: "夜景效果图：照明与城市界面",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/zero-square-gate/axonometric.png",
        label: "轴测图：停车棚体量与动线组织",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/zero-square-gate/plan.png",
        label: "平面图：人车分流与停放秩序",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/zero-square-gate/section.png",
        label: "剖面图：空间层次与通行关系",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/zero-square-gate/elevation.png",
        label: "立面图：金属格栅与立面节奏",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/zero-square-gate/material-analysis.png",
        label: "材料分析：低碳策略与构造表达",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/zero-square-gate/presentation-board.jpg",
        label: "完整展板：项目叙事与方案汇总",
        aspect: "aspect-[3/4]"
      }
    ],
    accent: "Urban Mobility Node",
    sections: {
      background:
        "大零号湾科创园区存在高频短途通勤需求，非机动车停放点既承担交通功能，也影响园区入口形象和公共空间秩序。",
      problem:
        "原有停放区域容易出现人车混行、停放无序、遮雨不足和界面消极等问题，空间没有形成明确的绿色出行节点。",
      goal:
        "通过停车棚设计整合停放效率、动线安全、视觉秩序和低碳表达，让基础设施成为园区公共界面的一部分。",
      process: [
        "分析园区入口、道路、人流与车流交汇关系，确定人车分流策略。",
        "推导停车棚模数、格栅立面、照明和智慧停放模块的位置。",
        "使用 Rhino 和渲染工具验证体量、材料和日夜场景。"
      ],
      solution:
        "设计采用金属格栅立面与清晰的方形秩序，将停车、引导、遮蔽和信息提示整合为一个轻量化城市微出行设施。",
      prototype:
        "页面预留场地分析图、流线图、整体透视、立面局部、夜景渲染和低碳策略板块。",
      outcome:
        "项目帮助我把单体设施放进城市动线和公共体验中思考，训练了从场地问题到空间系统的表达能力。"
    }
  },
  {
    slug: "soundshell-serenity-pendant",
    title: "SoundShell / Serenity Pendant",
    category: "featured",
    type: "AI Office Recorder / Wearable Device",
    time: "2025",
    summary:
      "一款融合极简饰品形态与 AI 办公录音功能的便携录音设备，强调低侵入式办公记录、触控交互和温润科技美学。",
    keywords: ["AI 录音", "办公效率", "可穿戴设备", "极简科技", "情绪化产品"],
    tools: ["AI Product Thinking", "Rhino", "KeyShot", "CMF", "Interaction"],
    heroImage: "/images/projects/soundshell-serenity-pendant/hero.jpg",
    galleryImages: [
      {
        src: "/images/projects/soundshell-serenity-pendant/detail-01.jpg",
        label: "B 端产品渲染：桌面与办公物件场景",
        aspect: "aspect-[4/5]"
      },
      {
        src: "/images/projects/soundshell-serenity-pendant/process-01.jpg",
        label: "B 端产品渲染：饰品形态与材质质感",
        aspect: "aspect-[4/5]"
      },
      {
        src: "/images/projects/soundshell-serenity-pendant/modeling.jpg",
        label: "建模图：设备结构与外形推敲",
        aspect: "aspect-[4/5]"
      },
      {
        src: "/images/projects/soundshell-serenity-pendant/usage-01.jpg",
        label: "C 端使用场景：身份牌与办公佩戴",
        aspect: "aspect-[4/3]"
      },
      {
        src: "/images/projects/soundshell-serenity-pendant/usage-02.jpg",
        label: "C 端使用场景：低侵入式随身记录",
        aspect: "aspect-[4/3]"
      },
      {
        src: "/images/projects/soundshell-serenity-pendant/render-01.jpg",
        label: "C 端产品渲染：便携饰品式设备",
        aspect: "aspect-[4/3]"
      }
    ],
    accent: "Quiet Capture",
    sections: {
      background:
        "办公沟通中大量信息存在于会议、访谈和即时讨论里，用户需要记录重点，但传统录音设备往往显得突兀。",
      problem:
        "录音行为可能带来心理压力或场景侵入感，同时设备形态、佩戴方式和操作反馈都影响用户是否愿意长期使用。",
      goal:
        "将 AI 办公记录能力融入更温和的饰品形态，降低使用时的存在感，同时保留清晰的录音、标记和同步能力。",
      process: [
        "分析办公记录流程中的开始、暂停、重点标记和会后整理需求。",
        "探索吊坠、夹扣和桌面状态之间的形态转换。",
        "用 CMF 和触控反馈控制产品的科技感与亲和力。"
      ],
      solution:
        "产品采用极简吊坠式语言，结合触控区域、状态灯和 AI 转写摘要能力，使办公记录从工具行为转向低负担的随身能力。",
      prototype:
        "页面预留佩戴场景、产品三视图、触控交互、AI 摘要界面和 CMF 材质板。",
      outcome:
        "项目延伸了我对 AI 硬件的兴趣：好的 AI 产品不只在模型能力，也在用户是否自然地把它带入真实场景。"
    }
  },
  {
    slug: "ai-design-critique-studio",
    title: "AI Design Critique Studio",
    category: "ai-lab",
    type: "AI Product / Vibe Coding Prototype",
    time: "2025",
    summary:
      "本人耗时一周并反复打磨的一个面向设计类学生的 AI 作品评审平台，支持作品评审和作品集评审，通过动态评价标准、红牌规则和维度权重，帮助学生在课程作业、比赛投稿、求职作品集准备中获得更清晰的反馈。",
    keywords: ["AI 产品", "设计评审", "作品集", "Vibe Coding", "前端原型"],
    tools: ["Codex", "Claude Code", "Next.js", "Tailwind CSS", "Prompt Design"],
    heroImage: "/images/projects/ai-design-critique-studio/hero.png",
    galleryImages: [
      {
        src: "/images/projects/ai-design-critique-studio/mode-selection.png",
        label: "模式选择：首页入口与评审类型切换",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/process-01.png",
        label: "流程说明：一次评审如何形成判断",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/work-review.png",
        label: "作品评审页：单张作品上传与反馈",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/portfolio-review.png",
        label: "作品集评审页：完整 PDF 与多维评分",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/history.png",
        label: "历史记录：评审结果复盘与追踪",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/report-guide.png",
        label: "Report guide: key issues and scoring basis",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/dimension-analysis.png",
        label: "Dimension analysis: radar score overview",
        aspect: "aspect-[16/9]"
      },
      {
        src: "/images/projects/ai-design-critique-studio/revision-priority.png",
        label: "Revision priority: keep and improve checklist",
        aspect: "aspect-[16/9]"
      }
    ],
    accent: "Critique Engine",
    sections: {
      background:
        "设计类学生常常缺少稳定、具体、可执行的反馈来源。不同课程、比赛和求职场景对作品的评价标准也并不相同。",
      problem:
        "普通 AI 评价容易泛泛而谈，无法明确指出作品在结构、逻辑、视觉、表达和风险项上的具体问题。",
      goal:
        "搭建一个可配置评价维度、权重和红牌规则的设计评审原型，让 AI 反馈更接近真实导师评审语境。",
      process: [
        "拆分作品评审和作品集评审两种场景，定义不同维度权重。",
        "设计动态标准、红牌规则和建议输出结构。",
        "使用 Codex 与 Claude Code 快速完成页面、交互和评审流程验证。",
        "通过真实界面截图复盘信息架构、评审路径和结果表达方式。"
      ],
      solution:
        "平台以评分维度、问题诊断和修改建议为核心，帮助学生判断作品是否适合课程提交、比赛投稿或作品集展示。",
      prototype:
        "详情页预留产品界面截图、评审流程图、规则配置面板和反馈报告样式。",
      outcome:
        "这是我将 AI 能力转化为产品原型的一次实践，也验证了 Codex 与 Claude Code 在早期产品实验中的价值。"
    }
  },
  {
    slug: "aigc-visual-workflow",
    title: "AIGC Visual Workflow",
    category: "ai-lab",
    type: "AI Visual Workflow / Creative Technology",
    time: "2025",
    summary:
      "展示我使用 ComfyUI、ControlNet、Flux、Image2、图生视频等工具进行视觉生成、线稿控制、深度控制、材质渲染和视觉叙事的探索。",
    keywords: ["ComfyUI", "ControlNet", "Flux", "Image2", "AIGC", "图生视频"],
    tools: ["ComfyUI", "ControlNet", "Flux", "Image2", "Photoshop", "Video Workflow"],
    heroImage: "/images/projects/aigc-visual-workflow/hero.png",
    galleryImages: [
      {
        src: "/images/projects/aigc-visual-workflow/detail-01.jpg",
        label: "Image2 海报生成：视觉风格探索",
        aspect: "aspect-[3/4]"
      },
      {
        src: "/images/projects/aigc-visual-workflow/process-01.jpg",
        label: "ComfyUI 人物八视图与参考控制",
        aspect: "aspect-[16/10]"
      }
    ],
    accent: "Controlled Generation",
    sections: {
      background:
        "生成式 AI 正在从单次出图工具转向可被控制、可被复现、可接入设计流程的视觉生产系统。",
      problem:
        "如果只依赖随机提示词，图像结果难以稳定服务于产品概念、风格延展或连续叙事。",
      goal:
        "通过节点式工作流、ControlNet 控制和多模型组合，把 AI 图像生成纳入更可控的设计表达流程。",
      process: [
        "搭建 ComfyUI 工作流，测试线稿、深度、姿态和参考图控制。",
        "比较 Flux、Image2 等模型在材质、构图和产品氛围上的差异。",
        "将生成结果继续用于海报、视频和概念视觉延展。"
      ],
      solution:
        "工作流强调从输入控制到结果筛选的全过程管理，让 AI 成为视觉推导工具，而不只是最终效果图生成器。",
      prototype:
        "详情页预留节点截图、输入控制图、生成结果对比、海报延展和图生视频片段封面。",
      outcome:
        "这个实验扩展了我的视觉原型能力，也让我更清楚 AI 在设计流程中适合承担哪一类任务。"
    }
  },
  {
    slug: "rhino-modeling",
    title: "Rhino 模型训练",
    category: "visual-3d",
    type: "3D Modeling / Form Study",
    time: "2023-2025",
    summary: "通过基础产品建模训练建立造型、比例、结构和曲面控制能力。",
    keywords: ["Rhino", "曲面建模", "产品比例", "结构训练"],
    tools: ["Rhino"],
    heroImage: "/images/projects/rhino-modeling/hero.png",
    galleryImages: [
      {
        src: "/images/projects/rhino-modeling/detail-01.png",
        label: "无人机白模：产品结构与比例训练",
        aspect: "aspect-[16/10]"
      },
      {
        src: "/images/projects/rhino-modeling/process-01.png",
        label: "吹风机白模：基础造型练习",
        aspect: "aspect-[16/10]"
      }
    ],
    accent: "Form Practice",
    sections: {
      background: "产品设计表达需要稳定的三维建模能力作为基础。",
      problem: "复杂曲面和结构细节需要在比例、倒角和建模逻辑之间取得平衡。",
      goal: "训练可复用的建模方法，提升从草图到三维表达的效率。",
      process: ["拆解参考产品结构。", "建立主曲面和细节层级。", "输出可用于渲染和版面展示的模型。"],
      solution: "以产品白模和局部细节训练为主，覆盖小家电、交通工具和电子产品形态。",
      prototype: "页面预留模型白模、线框、局部曲面和最终渲染对比。",
      outcome: "形成了较稳定的产品建模基础，为后续产品设计项目提供表达支撑。"
    }
  },
  {
    slug: "rendering-visualization",
    title: "KeyShot / Enscape / Twinmotion 渲染",
    category: "visual-3d",
    type: "Rendering / Scene Visualization",
    time: "2023-2025",
    summary: "通过产品与空间渲染训练材质、灯光、场景和氛围控制能力。",
    keywords: ["KeyShot", "Enscape", "Twinmotion", "材质", "灯光"],
    tools: ["KeyShot", "Enscape", "Twinmotion", "Photoshop"],
    heroImage: "/images/projects/rendering-visualization/hero.jpg",
    galleryImages: [
      {
        src: "/images/projects/rendering-visualization/detail-01.png",
        label: "空间夜景渲染：建筑与氛围控制",
        aspect: "aspect-[16/9]"
      }
    ],
    accent: "Material Atmosphere",
    sections: {
      background: "设计方案需要通过渲染让材料、体量和使用场景被快速理解。",
      problem: "渲染不只是追求真实感，也需要服务于项目叙事和版面表达。",
      goal: "建立不同工具之间的表达分工，提升产品和空间项目的展示质量。",
      process: ["整理模型层级。", "设置材质、灯光和镜头。", "在 Photoshop 中进行后期统一。"],
      solution: "根据产品、空间和概念图选择不同渲染路径，控制画面的清晰度与情绪。",
      prototype: "页面预留产品渲染、空间渲染、材质细节和前后期对比。",
      outcome: "提高了从模型到作品集视觉呈现的完整度。"
    }
  },
  {
    slug: "sketching-foundation",
    title: "手绘与速写基础",
    category: "visual-3d",
    type: "Sketching / Ideation",
    time: "2023-2025",
    summary: "通过手绘和速写训练快速构思、形体理解和视觉表达基础。",
    keywords: ["手绘", "速写", "概念草图", "形体表达"],
    tools: ["Sketching", "Marker", "Procreate"],
    heroImage: "/images/projects/sketching-foundation/hero.jpg",
    accent: "Idea Sketch",
    sections: {
      background: "手绘是产品设计早期构思和沟通中仍然高效的表达方式。",
      problem: "如果概念只能依赖软件推进，早期探索的速度和自由度会受限。",
      goal: "提升用线条快速表达结构、比例、使用方式和概念方向的能力。",
      process: ["进行产品速写和形体练习。", "将草图用于方案发散。", "结合后续建模验证比例。"],
      solution: "以草图作为思考工具，而不是最终展示目的，辅助更快进入方案推导。",
      prototype: "页面预留草图扫描、概念发散页和草图到模型的对照。",
      outcome: "保持了从手到脑的快速反馈，让数字工具之外仍有直接的设计推导能力。"
    }
  }
];

export const featuredProjects = projects.filter((project) => project.category === "featured");
export const aiLabProjects = projects.filter((project) => project.category === "ai-lab");
export const visualProjects = projects.filter((project) => project.category === "visual-3d");

export const aiLabSections = [
  {
    title: "AIGC Visual Workflow",
    description:
      "使用 ComfyUI、ControlNet、Flux、Image2 和图生视频工具，将线稿、深度、参考图、材质和叙事节奏纳入可控生成流程。",
    points: [
      "海报与概念视觉生成",
      "ControlNet 线稿、深度与构图控制",
      "Flux 工作流与模型风格比较",
      "图生视频与视觉叙事延展"
    ]
  },
  {
    title: "Vibe Coding & AI Product Prototype",
    description:
      "使用 Codex、Claude Code 等 AI 编程工具快速搭建网页页面、交互原型、AI 产品 MVP 和部署流程。",
    points: [
      "Next.js 页面与组件快速生成",
      "Tailwind CSS 视觉系统搭建",
      "Framer Motion 微交互验证",
      "GitHub / Vercel 部署与迭代"
    ]
  }
];

export const skills = [
  {
    title: "Product Design",
    items: ["用户研究", "产品概念", "CMF", "结构推导", "交互逻辑", "设计展板"]
  },
  {
    title: "AI Visual Workflow",
    items: ["ComfyUI", "ControlNet", "Flux", "Image2", "图生视频"]
  },
  {
    title: "Vibe Coding",
    items: ["Codex", "Claude Code", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub", "Vercel"]
  },
  {
    title: "Visual & 3D",
    items: ["Rhino", "KeyShot", "Photoshop", "Illustrator", "Enscape", "Twinmotion", "手绘"]
  }
];

export const contactLinks = [
  { label: "Email", value: "zhucygll@gmail.com", href: "mailto:zhucygll@gmail.com" },
  { label: "GitHub", value: "zhucygll-hub", href: "https://github.com/zhucygll-hub" }
];
