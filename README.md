## The Application

This application is a shared starting point for the URUG Battle Royale. It represents a simplistic Comicbook Collection.

## Design Specification

The user experience for this application is kept intentionally simple so that implementing the various versions won't consume too much time and also so that the implementations can be presented and understood in a short time period.

The design consists of two pages. The list of comic books is a grid of cover art with names as captions to the cover art. The comic book detail page shows some summary data at the top and then has a tabular data about each of the issues of the comic.

### Book List
<img src="https://raw.github.com/hqmq/comic_collector/master/public/book_list.png" style="float:right;" />
Don't worry about pagination or anything too fancy on this stage. Just order the comic books alphabetically by title and show the cover art above the name of the comic book.

### Book Detail
<img src="https://raw.github.com/hqmq/comic_collector/master/public/book_detail.png" style="float:right;" />
The top of this page contains some aggregate data like the total price of all issues and the total number of issues.  This data should be kept in sync as new issues are added.

Below the summary data there is a table of issues for this comic book.  The table should show a small image of the cover of that issue, the issue number, the title of the issue and the price of that issue.  This table should be maintained in order of the issue number.

> Please do not do anything crazy like install RMagick to make the thumbnail. Just stick a width/height attribute on the image tag.

At the bottom of the table there should be an in-line form so that a new issue can be added directly on this page. After adding an issue the summary data and tabular data should be updated.

## Getting Started
```bash
$ git clone ...
$ bundle install
$ rake db:setup db:fixtures:load
$ rails s
```
