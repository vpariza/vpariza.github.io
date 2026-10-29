---
layout: about
title: About
permalink: /
og_image: /assets/img/prof_pic.jpg
subtitle: PhD researcher in computer vision at the University of Technology Nuremberg (UTN).
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Fundamental AI Lab</p>
    <p>Nuremberg, Germany</p>
news: false
selected_papers: false
social: false
---

I work with [Yuki M. Asano](https://yukimasano.github.io) at the [Fundamental AI Lab](https://fundamentalailab.github.io/).

I study how models understand images and how that knowledge can help them generate and edit images. My earlier work focused on self-supervised vision encoders and the spatial information in their features. These days, I work on diffusion models for perception, editing, and generation, with growing interests in multimodal learning and video. Across these projects, I want to understand what visual information carries over between tasks and how to train and adapt models efficiently.

<div class="home-research">
<h2>Selected research</h2>
<div class="projects"><div class="row row-cols-1 row-cols-md-2">
{% assign research = site.projects | where: 'category', 'Research' | sort: 'importance' %}
{% for project in research %}{% include projects.liquid %}{% endfor %}
</div></div>
<p><a href="{{ '/publications/' | relative_url }}">All publications</a> · <a href="{{ '/projects/' | relative_url }}">More projects and software</a></p>
</div>

### Background

I completed my MSc in Artificial Intelligence at the University of Amsterdam, where I graduated cum laude and took part in the ELLIS MSc Honours Programme. My thesis was a collaboration between UvA, TNO, and ISTA, supervised by Yuki M. Asano, Gertjan Burghouts, and Francesco Locatello. Before that, I studied Computer Science at the University of Cyprus.

NeCo grew out of my MSc thesis. During that work, I also built [Open Hummingbird Evaluation](https://github.com/vpariza/open-hummingbird-eval), an open-source implementation of Balažević et al.'s dense nearest-neighbor evaluation.

I've also worked at Amazon, South Pole, and CYENS, and co-founded Fooderloo to help reduce food waste in Cyprus. My [CV]({{ '/cv/' | relative_url }}) has more about these roles.

Outside research, I enjoy music, cycling, other sports, and travelling.

## Recent news

{% include news.liquid limit=true %}

[All news]({{ '/news/' | relative_url }})
