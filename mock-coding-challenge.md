## The Assignment

_Below, you'll find a sample coding challenge that is similar to what a hiring company may assign._

### Part 1

We're trying to keep an eye on trending repositories on GitHub.

Using the language of your choice, write a script that crawls [GitHub's weekly trending page](https://github.com/trending?since=weekly)

Provide a terminal friendly script that:

* Lists each repository that appears, including its:
    - name
    - description
    - primary programming language (NA if not found)
    - user names of the primary contributors

You should also answer, programmatically:

* How many JavaScript repositories are on the list?
* What repositories (if any) do not specify a programming language?

Sample Output:

```no-highlight
CyberDyne / SkyNet
===========================
Global Digital Defense Network

Written primarily in C++

Primary Contributors: milesDyson, johnConnor
---------------------------
```

### Part II

Now that you have the data, use the crawled information to seed a well-structured database. Using the language and framework of your choice, write a JSON API backend that serves out a list of trending repositories.

### Things to consider:

* You will be evaluated on your use of object oriented programming to accomplish the tasks above.
* You will also be evaluated on your use of established coding conventions. Be sure to cite what style guide you're adhering to with your submission.
* We believe that the best code is written via Test Driven Development (TDD), so we're especially interested in code that includes a test suite. Please include unit tests for your models.

### Submission

Please don't submit or publicize your code. While we strongly encourage collaboration when you join the team, collaboration with peers on this assignment will disqualify you from consideration. This project should be completed individually.

You'll be asked during your interview to walk us through your design and approach.

## Notes From Launch

- When it comes to coding challenges, you'll frequently be asked to do things that will both a) initially make you uncomfortable and b) stretch the bounds of your capabilities. This coding challenge includes items we know are outside the bounds of what we teach, and that's intentional. While difficult, it is not outside the realm of your capabilities. You CAN do this!
- Good documentation is important. Please be sure to provide a `README.md` as part of your code that provides guidance on how to:
    * set up the project and seed the database
    * run a command to verify you've completed Part I's requirements
    * start a server so that the JSON endpoint can be tested. Be sure to include the URL where the JSON data can be found.
- You may opt to test your GitHub API interaction. This is not a requirement, but it would be a distinguishing quality of your submission. Tests, however, should not repetitively make API or HTTP requests. Consider using a tool like [VCR](https://github.com/vcr/vcr) or otherwise writing your tests so that they do not require an internet connection.
- You may have to research incorporating third party libraries (npm modules or ruby gems) to complete coding challenges. When you'll be called to do so, use your resources! It's ok asking the community to provide guidance on preferred libraries for performing certain tasks!
- For this particular example, we recommend using Ruby and Rails. For crawling GitHub, we think you should use [nokogiri][nokogiri] to crawl the webpage. While this will not be typically provided, we've supplied a snippet of code to help guide you in the right direction below.

```ruby
require 'nokogiri'
require 'open-uri'

TRENDING_URL = 'https://github.com/trending?since=weekly'
page = Nokogiri::HTML(open(TRENDING_URL))

# fetch all of the HTML `<li>` elements that represent individual repositories
repo_list_items = page.css(".repo-list li")

#output the first repository's name
puts repo_list_items[0].css("h3")[0].text.strip
```

[nokogiri]: https://github.com/sparklemotion/nokogiri
