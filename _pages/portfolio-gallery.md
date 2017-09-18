---
layout: gallery
title: Project Portfolio Gallery
no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
---

This is my placeholder text for my portfolio gallery.
<div class="isotope-lightgallery">
{% include gallery-sorting.html gallery=site.data.galleries.portfolio %}
</div>
