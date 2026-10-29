// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Papers on visual representation learning and reproducibility.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research, open-source software, and selected course projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-fooderloo-received-the-best-amp-amp-most-innovative-solution-award-in-the-cyprus-digital-championship-for-students",
          title: 'Fooderloo received the Best &amp;amp;amp; Most Innovative Solution award in the Cyprus Digital...',
          description: "",
          section: "News",},{id: "news-i-joined-amazon-data-services-ireland-as-a-software-development-engineer-intern-in-the-consumer-reliability-engineering-analytics-team",
          title: 'I joined Amazon Data Services Ireland as a Software Development Engineer Intern in...',
          description: "",
          section: "News",},{id: "news-fooderloo-won-1st-place-in-the-go-green-go-digital-go-start-up-competition",
          title: 'Fooderloo won 1st place in the Go Green, Go Digital, Go Start-up! competition....',
          description: "",
          section: "News",},{id: "news-our-south-pole-project-received-the-best-ready-for-production-solution-award-at-summer-of-ai-during-my-internship-i-improved-product-to-category-matching-accuracy-by-25-2-percentage-points-and-deployed-the-models-using-kubernetes",
          title: 'Our South Pole project received the Best Ready for Production Solution award at...',
          description: "",
          section: "News",},{id: "news-our-reproducibility-study-of-label-free-explainability-for-unsupervised-models-was-published-in-rescience-c",
          title: 'Our reproducibility study of Label-Free Explainability for Unsupervised Models was published in ReScience...',
          description: "",
          section: "News",},{id: "news-i-graduated-cum-laude-with-an-msc-in-artificial-intelligence-from-the-university-of-amsterdam-where-i-also-took-part-in-the-ellis-msc-honours-programme",
          title: 'I graduated cum laude with an MSc in Artificial Intelligence from the University...',
          description: "",
          section: "News",},{id: "news-i-started-my-phd-at-the-university-of-technology-nuremberg-working-on-self-supervised-learning-for-vision-with-yuki-m-asano",
          title: 'I started my PhD at the University of Technology Nuremberg, working on self-supervised...',
          description: "",
          section: "News",},{id: "news-our-paper-near-far-patch-ordering-enhances-vision-foundation-models-scene-understanding-neco-was-accepted-to-iclr-2025",
          title: 'Our paper Near, far: Patch-ordering enhances vision foundation models’ scene understanding (NeCo) was...',
          description: "",
          section: "News",},{id: "news-our-paper-franca-was-accepted-to-cvpr-2026-shashanka-venkataramanan-and-i-are-co-first-authors",
          title: 'Our paper Franca was accepted to CVPR 2026. Shashanka Venkataramanan and I are...',
          description: "",
          section: "News",},{id: "news-i-was-named-an-outstanding-reviewer-at-cvpr-2026",
          title: 'I was named an Outstanding Reviewer at CVPR 2026.',
          description: "",
          section: "News",},{id: "projects-neco",
          title: 'NeCo',
          description: "Learning the order of nearby patches to improve dense visual features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-robustness-of-3d-occupancy-prediction",
          title: 'Robustness of 3D occupancy prediction',
          description: "Testing how 3D occupancy models handle corrupted inputs and how data augmentation affects their performance. UvA course project, 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3d-occupancy/";
            },},{id: "projects-franca",
          title: 'Franca',
          description: "Learning visual features at several levels of detail for dense prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/franca/";
            },},{id: "projects-open-hummingbird-evaluation",
          title: 'Open Hummingbird Evaluation',
          description: "An open-source implementation of dense nearest-neighbor evaluation for vision encoders, developed during my MSc thesis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/open-hummingbird/";
            },},{id: "projects-open-vision-banana",
          title: 'Open Vision Banana',
          description: "Adapting image editors for perception, including depth, surface normals and segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/open-vision-banana/";
            },},{id: "projects-socratic-image-generation",
          title: 'Socratic Image Generation',
          description: "Using image captions to refine generation prompts, and studying bias and hallucinations when connecting models. UvA course project, 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/socratic-image-generation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%6C%65%6E%74%69%6E%6F%73.%70%61%72%69%7A%61@%75%74%6E.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vpariza", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/valentinos-pariza", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-3440-9935", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jFT8a1YAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/v_pariza", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
