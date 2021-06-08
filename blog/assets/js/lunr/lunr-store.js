var store = [{
        "title": "Introducing Earthly: build automation for the container era",
        "excerpt":"We live in an era of continuous delivery, containers, automation, rich set of programming languages, varying code structures (mono/poly-repos) and open-source. And yet, our most popular CI/CD platform was started 15 years ago when the industry looked very different. CI systems have not changed much since — they are still...","categories": ["News"],
        "tags": [],
        "url": "/blog/introducing-earthly-build-automation-for-the-container-era/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.1.3 Released",
        "excerpt":"Earthly v0.1.3 Released.  Release Notes:   Support for FROM scratch Ability to configure whether to use a loop device for cache storage Improved installation one-liner  ","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-1-3-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.2.0 Released",
        "excerpt":"Changes: global configuration file for git credentials, cache location and size, no loop device, and others; see Configuration Reference in the docs for more details. rename build.earth to Earthfile gitlab support ability to change cache path (previously it was hardcoded to /tmp/earthly; now defaults to /var/cache/earthly on linux or ~/Library/Caches/earthly...","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-2-0-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.2.1 Released",
        "excerpt":"Changes:   fixes handling of sockets between different targets (#115) fixes handling of symlink SSH sockets (#61)  Release Page  ","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-2-1/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.2.2 Released",
        "excerpt":"Changes:   fixes macOS-specific bug introduced in v0.2.1 related to handling of symlink SSH sockets (#61)  Release Page  ","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-2-2-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.3.0 Released",
        "excerpt":"Changes: New Interactive mode debugger via -i option (Experimental). Drops you into a shell in the container, if the build fails. New Support for Dockerfiles via FROM DOCKERFILE command (Beta).Docs. Example. New Significant speed improvement on Mac (builds are now almost 3x faster). New Built-in arg EARTHLY_TARGET_TAG_DOCKER. It is similar...","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-3-0-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.3.2 Released",
        "excerpt":"Changes New Bash autocompletion. Installation. ( experimental ) New Docker operations no longer affected by disk performance issues. Requires use of new WITH DOCKER syntax. See Docs and an Example. ( experimental ) Support for building dockerfiles which are generated inside earthly targets, e.g. FROM DOCKERFILE +gen-dockerfile/ #219 Support for COPY...","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-3-2-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "v0.3.3 Released",
        "excerpt":"Changes   new earth bootstrap command can be run to setup bash and zsh shell completion  Release Page  ","categories": ["News"],
        "tags": [],
        "url": "/blog/v0-3-3-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Can We Build Better?",
        "excerpt":"Have you ever had a test fail in the build but not locally? I have. Have you ever then burnt half a day pushing small changes and waiting for your build to get queued so that you could see if you had isolated the breaking change?  Well I have, and...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/better-builds/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Earthly 0.3.6 Released",
        "excerpt":"Release Notes: introduced --ssh flag for RUN which allows commands to access the ssh authentication host agent via the socket $SSH_AUTH_SOCK (fixes #292) pass along user terminal environment variable to interactive debugger (fixes #293) support for in-line comments (fixes #288) fix autocompletion bug when Earthfile is invalid (fixes #299) Documentation:...","categories": ["News"],
        "tags": [],
        "url": "/blog/earthly-0-3-6-released/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Hacktoberfest 2020",
        "excerpt":"We’re excited to announce that Earthly is participating in Hacktoberfest this October. Last year’s fest saw more than 400,000 pull requests opened and this year should prove to be even larger. What is it The hosting provider DigitalOcean is once again hosting the Hacktoberfest to celebrate open source. The Hacktoberfest...","categories": ["News"],
        "tags": [],
        "url": "/blog/hacktoberfest-2020/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "The world deserves better builds",
        "excerpt":"Hello, developers of planet Earth! Earlier this year, we at Earthly embarked on a journey to bring better builds to the world. We started with a deep belief that builds should be self-contained, reproducible, portable, and parallel. In addition, we think build tools should be friendly, accessible, and down to...","categories": ["News"],
        "tags": [],
        "url": "/blog/the-world-deserves-better-builds/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Grateful for Hacktoberfest!",
        "excerpt":"Since Hacktoberfest started two weeks ago, we’ve seen a spike in traffic to Earthly. We saw developers of all levels coming together to improve our project in one way or another. Many developers didn’t know what Earthly was, so this was a great occasion for them to also get familiar...","categories": ["News"],
        "tags": [],
        "url": "/blog/grateful-for-hacktoberfest/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Building on Kubernetes: Ingress",
        "excerpt":"Here at Earthly, we are building an internal platform on AWS using EKS. I talked to our lead architect Corey Larson about the decisions and trade offs he is making as he designs our platform. What is an internal platform? The internal platform is really the phrase I’ve always used...","categories": ["Articles"],
        "tags": ["Interview"],
        "url": "/blog/building-on-kubernetes-ingress/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Technology choice? Don't be weird",
        "excerpt":"Here at Earthly, we are building an internal platform on AWS using EKS.  I talked to our lead architect Corey Larson about the decisions and trade offs he is making as he designs our platform. The plan for the earthly internal platform says, “One thing to keep in mind as...","categories": ["Articles"],
        "tags": ["Interview"],
        "url": "/blog/dont-be-weird/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Using gRPC with Golang, Python, and Ruby",
        "excerpt":"I was surprised to learn that Google protocol buffers (protobufs), were first introduced nearly two decades ago. They were used internally at google as early as 2001 and were open sourced 2008. Following this success, in 2016 Google released gRPC.   gRPC offered a way to define remote procedure calls...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/protobufs-and-grpc/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "You're using docker-compose wrong",
        "excerpt":"Tell me if this sounds familiar? You were introduced to docker-compose either by choice or by force. You’ve been using it for a while, but you find it clunky. I’m here to tell you, you are probably using it wrong. Ok, that might be an exaggeration. I don’t think there’s...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/youre-using-docker-compose-wrong/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Unit Testing vs Integration Testing",
        "excerpt":"In 1998, Kent Beck wrote sUnit, a unit testing framework for SmallTalk.  Beck later ported this framework to Java as jUnit.  From there, xUnit frameworks spread to the most popular languages. Newer languages, like GoLang and Rust, have incorporated testing into the compiler and standard library directly. But unit testing...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/unit-vs-integration/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "The Next Iteration of Earthly",
        "excerpt":"Dear Earthly community, We’ve been working with many of you to better understand your pains and use-cases when it comes to builds. We have heard that Repeatable builds are key You like the idea of combining a Makefile with a Dockerfile (the ethos of Earthfiles) Integration tests are painful, in...","categories": ["News"],
        "tags": [],
        "url": "/blog/the-next-iteration/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Encrypting Data With SSH Keys and Golang",
        "excerpt":"We’re currently working on a server for sharing secrets between developers and CI systems, and one of the features we decided to support is passwordless login via ssh keys. I had never used any of the public/private key encryption libraries in Go before, so I wanted to spend some time...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/encrypting-data-with-ssh-keys-and-golang/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Migrating Your Open Source Builds Off Of Travis CI",
        "excerpt":"Starting in early December, a mad dash has been underway to migrate open-source projects off of Travis CI. What happened and where should you move your project to? Jame’s Hilliard on Twitter If you’re not familiar with Travis CI, it’s a build company that has been powering the continuous integration...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/migrating-from-travis/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Top 3 Resources For Learning GoLang in 2021",
        "excerpt":"Why Learn Go If I were a system administrator looking to learn a new programming language it would be Go.So many of our tools including Kubernetes, Prometheus, and Terraform are written, and extended, in Go that it’s almost a requirement next to learning Bash. https://t.co/OfZmGo4uP5 — Kelsey Hightower (@kelseyhightower) December...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/top-3-resources-to-learn-golang-in-2021/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "5 Blogs for Scala's Birthday",
        "excerpt":"The public release of Scala was 17 years ago today.  The language and its community are certainly not standing still, so I’ve put together a list of my favorite active Scala blogs. Blogs are a great way to stay on top of what is happening in the language.  Many important...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/top-5-scala-blogs/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Monorepo vs Polyrepo",
        "excerpt":"The decision of whether to use a monorepo or a polyrepo structure for your source code can be a very emotional (maybe even religious!) battle. On its surface, it’s not much different than “tabs vs spaces” or “vim vs emacs”. Or is it? In the following, I will attempt to...","categories": ["Articles"],
        "tags": ["monorepo","polyrepo","tech-strategy"],
        "url": "/blog/monorepo-vs-polyrepo/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Every open-core company should be a source-available company",
        "excerpt":"Earthly users and prospective users - today we are announcing our switch to Business Source License 1.1 (BSL). We would like to provide Earthly to as many engineers as possible for as long as possible. In order to build a project that continues to evolve, to grow, to have strong...","categories": ["News"],
        "tags": ["license","news","bsl"],
        "url": "/blog/every-open-core-company-should-be-a-source-available-company/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "How to Man in the Middle HTTPS Using mitmproxy",
        "excerpt":"Introduction Have you ever wanted to see what kinds of requests a service or application on your machine is making and what kind of responses it is getting back? Have you ever tried and failed to capture this traffic or modify it to investigate how something works (or doesn’t work)....","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/mitmproxy/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "What is Buildkit?",
        "excerpt":"There is an excellent open-source project that you have probably used without realizing it. It’s called BuildKit, and it is what turns a Dockerfile into a Docker image. And it doesn’t just build Docker images; it can build OCI images and several other output formats. OpenFasS uses it to turn...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/what-is-buildkit-and-what-can-i-do-with-it/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "INTERCAL, YAML, And Other Horrible Programming Languages",
        "excerpt":"PROGRAM REJECTED FOR MENTAL HEALTH REASONS In 1972, two students learning FORTRAN came up with a fantastic new programming language called INTERCAL. INTERCAL is a bit unusual. For example, single quotes are called sparks, and double quotes are called rabbit ears, less than (&lt;) is an angle, and a dash...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/intercal-yaml-and-other-horrible-programming-languages/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Using Apple Silicon (M1) as a cloud engineer, two months in",
        "excerpt":"So I’ve been using my new M1-based MacBook Pro for a couple of months for a mix of development, email, and other things an open-source maintainer does day-to-day. The typical first reaction that you get when using this is “it runs my Docker stack without sounding like a plane taking...","categories": ["Articles"],
        "tags": ["docker","apple-silicon","m1","arm64","aarch64"],
        "url": "/blog/using-apple-silicon-m1-as-a-cloud-engineer-two-months-in/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "How to Setup and Use Amazon's Elastic Container Registry",
        "excerpt":"A container is a simple unit that packages all your code and its dependencies so your application can run quickly and reliably from any computing environment. That means you could quickly move from your local environment to your staging and into production. Due to their portability, small size, and convenience,...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/how-to-setup-and-use-amazons-elastic-container-registry/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Understanding Docker Logging and Log Files",
        "excerpt":"Docker logging and its management are an important part of the containerization of your application. Once you’ve deployed your application, logging is one of the best tools to help reveal errors, aid in debugging, and optimize your application’s performance. With that in mind, let’s dive into Docker logging and its...","categories": ["Tutorials"],
        "tags": ["docker","tutorials"],
        "url": "/blog/understanding-docker-logging-and-log-files/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Build Your Own Ngrok Clone With AWS",
        "excerpt":"Introduction Ngrok is a tool that allows you to create secure, publically accessible URLs for your locally running code. Just a simple ./ngrok http 3000, and your tunnel is up and running! It also comes with an inspector for all traffic traveling over its tunnels. Pretty slick right? However, for...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/build-your-own-ngrok-clone/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "On YAML Discussions",
        "excerpt":"My article about how YAML makes a bad programming language 1 generated a lot of great discussions online. Here are some highlights, lightly edited: Config Traps dkarl pointed out that putting things in config files that shouldn’t be there happens for many reasons: Reason: Pride in creating a “generic” system...","categories": ["Articles"],
        "tags": ["news"],
        "url": "/blog/on-yaml-discussions/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Compiling Containers - Dockerfiles, LLVM, and BuildKit",
        "excerpt":"Introduction How are containers made? Usually, from a series of statements like RUN, FROM, and COPY, which are put into a Dockerfile and built. But how are those commands turned into a container image and then a running container? We can build up an intuition for how this works by...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/compiling-containers-dockerfiles-llvm-and-buildkit/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Understanding Bash",
        "excerpt":"Bash scripts give you the ability to turn a tedious series of commands into an easily runnable and repeatable script. With many real-world use cases, like using a bash script to run a continuous deployment process, create a series of files in a folder, or download the contents of several...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/understanding-bash/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Addressing Slow Performance in Jenkins",
        "excerpt":"There’s nothing more frustrating than a sluggish continuous integration system. It slows down feedback loops and prevents code from reaching production quickly. While quick fixes like using a bigger CI server can buy you time, you ultimately have to invest in maintaining the performance of your continuous integration workflow. Jenkins...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/slow-performance-in-jenkins/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Welcoming Wes McKinney as an advisor to Earthly",
        "excerpt":"In our journey to bring repeatable builds to the world, we have had the pleasure to talk to a number of industry veterans about the challenges surrounding CIs today. One person that was particularly excited about our mission is Wes McKinney, the author of Python for Data Analysis, the creator...","categories": ["News"],
        "tags": ["advisor","data-engineering"],
        "url": "/blog/wes-mckinney/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Building a Real-Time Application in the Phoenix Framework with Elixir",
        "excerpt":"The Elixir language, along with the Phoenix framework, has been growing in popularity at a quick pace, and with good reason. Phoenix offers productivity levels comparable to frameworks like Ruby on Rails while being one of the fastest web frameworks available. If you’re currently working with a web framework like...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/real-time-phoenix-elixir/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Green Vs. Brown Programming Languages",
        "excerpt":"The Data The Stack Overflow Developer Survey1 results are a great source of information about how developers work. I was looking at the 2020 results for some ideas on what programming languages we should add to our documentation on containerized builds, and I noticed something interesting about the types of...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/brown-green-language/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Understanding Docker Networking",
        "excerpt":"Docker is the de facto model for building and running containers at scale in most enterprise organizations today. At a very high level, Docker is a combination of CLI and a daemon process that solves common software problems like installing, publishing, removing, and managing containers. It’s perfect for microservices, where...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/docker-networking/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Building a Monorepo with Bazel",
        "excerpt":"A monorepo is perhaps what you would expect from the name: a single code repository for your entire codebase. Wikipedia describes it as a decade-old software development strategy for storing all your code in a single repository, but you can also think of it as a higher-level architecture pattern for...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/monorepo-with-bazel/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "DOS Gaming In Docker",
        "excerpt":"Its been three decades since the height of the DOS era, and look how far we’ve come! A machine that used to cost $2,000 can be emulated - down to the processor! — in our web browsers while also checking email or watching a YouTube video. However, amidst these advancements,...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/dos-gaming-in-docker/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "What Is Continuous Integration?",
        "excerpt":"Continuous integration has become prevalent in software development, but it’s still a complex and wide-ranging topic. In this post, we’ll cover the basics of continuous integration, the differences between CI and CD, and common CI tools. You’ll also find some tips for the best way to set up CI in...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/continuous-integration/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Getting a Repeatable Build, Every Time",
        "excerpt":"EDIT This post used to be titled How to not use our build tool. Thanks to Reddit user musman for suggesting the current updated title In our journey to becoming better software engineers we have learned of various ways in which the team’s productivity could be improved. We noticed that...","categories": ["Articles"],
        "tags": ["Makefile","Dockerfile","Bash","Build scripts","Build strategy","Repeatable builds","Glue layer"],
        "url": "/blog/repeatable-builds-every-time/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Understanding Docker Multistage Builds",
        "excerpt":"At first glance, writing Dockerfiles appears to be a straightforward process. After all, most basic examples reflect the same set of steps. However, not all Dockerfiles are created equal. There is an optimal way of writing these files to produce the kind of Docker images you want for your final...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/docker-multistage/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Protocol Buffers Best Practices for Backward and Forward Compatibility",
        "excerpt":"Protocol Buffers serialize structured data so it can be efficiently stored or shared over a network. They were designed for internal use at Google in 2001 and released to the public under an open-source license in 2008. Protocol Buffers are compiled to a series of strictly arranged bytes, so they...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/backward-and-forward-compatibility/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Why is JRuby Slow?",
        "excerpt":"Recently, I made some contributions to the continuous integration process for Jekyll. Jekyll is a static site generator created by GitHub and written in Ruby, and it uses Earthly and GitHub Actions to test that it works with Ruby 2.5, 2.7, 3.0, and JRuby. The build times looked like this:...","categories": ["Tutorial"],
        "tags": [],
        "url": "/blog/jruby/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Achieving Repeatability in Continuous Integration",
        "excerpt":"In software engineering, continuous integration is the practice of merging all developers’ working copies to a shared mainline several times a day. Grady Booch first proposed the term CI in his 1991 method, although he did not advocate integrating several times a day. —Wikipedia Continuous Integration (CI) and continuous delivery...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/achieving-repeatability/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Creating and hosting your own deb packages and apt repo",
        "excerpt":"As an Ubuntu user, I find myself typing apt install ... frequently as a way to install software on my system. But what if I wanted to distribute my code to others via an apt repository? In this post I’ll cover how to 1) create a deb package, 2) create...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/creating-and-hosting-your-own-deb-packages-and-apt-repo/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Using Autotools to Configure, Make, and Install a Program",
        "excerpt":"Autotools is one of the most widely adopted code packaging and shipping tools available to developers on Linux. While there are alternatives, such as CMake, SCons, and BJam, they don’t quite match Autotools in ease of use, power, and versability. At its base, Autotools can help make your application more...","categories": ["Tutorial"],
        "tags": [],
        "url": "/blog/autoconf/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Don't Feed the Thought Leaders",
        "excerpt":"Here is a somewhat fictionalized personal story. I’ve changed the names of the people and the technology used. Raising Objections I was a new engineering manager who’s team was starting a new small but ambitious project at a SAAS company. The company had several hundred developers, and the project was...","categories": ["Articles"],
        "tags": [],
        "url": "/blog/thought-leaders/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Deployment Strategies",
        "excerpt":"There are many ways to deploy applications to a production server environment, and the terminology around deploy strategies is often confusing. In this short guide, I’ll review software deployment options starting from the most basic and straightforward and moving towards the more complex. Recreate Deployment Strategy This is the most...","categories": ["Tutorial"],
        "tags": [],
        "url": "/blog/deployment-strategies/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Incident Management Metrics and Key Performance Indicators",
        "excerpt":"In 2008, I got my first job at a software-as-a-service company. We built learning management software and ran it on servers in the small data center connected to our office. We released new software onto these production servers monthly and measured quality by counting bugs per release. We also had...","categories": ["Tutorial"],
        "tags": [],
        "url": "/blog/incident-management-metrics/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Example Graphs",
        "excerpt":"You can embedded graphs into the markdown like this: Simple Graph More Complex How to install pandoc-plot If you are using the docker container and jekyll, it should just work. Manual Mac setup: brew install pandoc brew install pandoc-plot install specific libs: pandoc-plot toolkits to list pip3 install matplotlib for...","categories": ["Tutorials"],
        "tags": [],
        "url": "/blog/example-plot/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      },{
        "title": "Example Post",
        "excerpt":"This post is in the future, and won’t show up in the published site Image without figure An image with the alt text hidden. An image with alt text printed below. some alt text Image with explicit figure Alex likes to draw and add a caption Image with implicit figure...","categories": ["News"],
        "tags": [],
        "url": "/blog/example/",
        "teaser": "/blog/assets/images/default-teaser.jpg"
      }]
