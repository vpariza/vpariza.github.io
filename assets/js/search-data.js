// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My Personal and Work Projects.",
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
          description: "Continuous Learning - &#39;We cannot become what we want by remaining what we are&#39;,  Max DePee.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-delighted-to-be-awarded-best-amp-amp-most-innovative-solution-2020-in-the-cyprus-digital-championship-for-students-for-fooderloo-tackling-food-waste-in-environmentally-friendly-ways",
          title: 'Delighted to be awarded “Best &amp;amp;amp; Most Innovative Solution 2020” in the Cyprus...',
          description: "",
          section: "News",},{id: "news-started-my-journey-at-amazon-data-services-in-ireland-as-part-of-the-consumer-reliability-engineering-analytics-cra-operational-intelligence-team-excited-to-contribute-to-the-company-s-innovative-projects-and-collaborate-with-talented-colleagues",
          title: 'Started my journey at Amazon Data Services in Ireland as part of the...',
          description: "",
          section: "News",},{id: "news-proud-to-win-1st-place-in-the-go-green-go-digital-go-start-up-competition-for-my-project-fooderloo-a-sustainable-solution-to-reduce-food-waste-in-cyprus",
          title: 'Proud to win 1st place in the “Go Green, Go Digital, Go Start-up!”...',
          description: "",
          section: "News",},{id: "news-thrilled-to-have-been-given-the-best-ready-for-production-solution-by-the-summer-of-ai-organisation-for-improving-the-co-product-category-matching-algorithm-at-south-pole-during-my-internship-increasing-its-top-1-accuracy-by-25-2-and-deploying-the-enhanced-models-to-production-using-kubernetes",
          title: 'Thrilled to have been given the “Best Ready for Production Solution” by the...',
          description: "",
          section: "News",},{id: "news-published-a-reproducibility-study-in-rescience-c-reproducibility-study-of-label-free-explainability-for-unsupervised-models-read-more-here",
          title: 'Published a reproducibility study in ReScience C: “Reproducibility Study of ‘Label-Free Explainability for...',
          description: "",
          section: "News",},{id: "news-honored-to-graduate-cum-laude-from-the-university-of-amsterdam-with-an-msc-in-artificial-intelligence-grateful-for-the-opportunity-to-participate-in-the-ellis-msc-honours-programme",
          title: 'Honored to graduate cum laude from the University of Amsterdam with an MSc...',
          description: "",
          section: "News",},{id: "news-excited-to-begin-my-phd-journey-at-the-university-of-technology-nuremberg-focusing-on-self-supervised-learning-and-synthetic-data-to-improve-vision-models-grateful-to-work-under-the-supervision-of-dr-yuki-m-asano-looking-forward-to-contributing-to-advancements-in-ai-research",
          title: 'Excited to begin my PhD journey at the University of Technology Nuremberg, focusing...',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-our-paper-neco-improving-dinov2-s-spatial-representations-in-19-gpu-hours-with-patch-neighbor-consistency-has-been-accepted-to-iclr-2025-you-can-read-it-here",
          title: 'Excited to announce that our paper, “NeCo: Improving DINOv2’s spatial representations in 19...',
          description: "",
          section: "News",},{id: "projects-neco",
          title: 'NeCo',
          description: "NeCo - Patch Neighbor Consistency is an SSL loss that leverages differentiable sorting to enforce patch-level nearest neighbor consistency between a student and teacher model, delivering state-of-the-art dense feature encoders and significant performance improvements across multiple vision tasks and datasets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
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
