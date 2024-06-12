var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "preface1",
  "level": "1",
  "url": "preface1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  The material in this workbook is based on \"Calculus Volume 1\", \"Calculus Volume 2\", and \"Calculus Volume 3\", published by OpenStax. You may download these books for free at https:\/\/openstax.org\/details\/books\/calculus-volume-1, https:\/\/openstax.org\/details\/books\/calculus-volume-2, or https:\/\/openstax.org\/details\/books\/calculus-volume-3.  This page is a digital version of the workbook created for use in Oklahoma City Community College's Calculus courses: Math 2104 (Calculus & Analytic Geometry I); Math 2214 (Calculus & Analytic Geometry II); Math 2314 (Calculus & Analytic Geometry III).  "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section 1.1 - Things",
  "body": " Section 1.1 - Things  words go here  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
