---
layout: gallery
title: "Project Portfolio Gallery"
support: [jquery, gallery]
excerpt: "This is a gallery of highlights (err..greatest hits?) of my past work."
header:
  teaser: assets/images/siteimages/toomuchbenchstock600x400.jpg
---
<!-- ### "Under Construction" 9/25/17: Metadata to be added to fix sorting functionality. -->
<p>These are a few examples of what kind of projects I like to get into.<br />
This isn't a complete representation, and most of my work work can't be shared :/<br />
Anyhow, this gallery contains examples spanning about ten years. Alas, many cringes<br />
were had when selecting photos as we all gain talent with experience :)<br />
<!-- ### Sort Images Based on Filter. Click images to expand and read descriptions. -->
<div class="isotope-lightgallery">
<div class="gallery-margins-override">
{% include gallery-sorting.html gallery=site.data.galleries.portfolio %}
</div>
</div>
