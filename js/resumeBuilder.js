var bio = {
    "name" : "Rodrigo Silva",
    "role" : "iOS and Web Developer",
    "skills" : [
        "programming", "swift", "objC",
        "iOS", "html", "css", "JS",
        "public presenting"
    ],
    "contacts": {
        "mobile" : "+55(19)993189779",
        "email" : "rcarvalho.dev@gmail.com",
        "github" : "https://github.com/rcarvalhosilva",
        "location" : "Campinas, SP, Brazil"
    },
    "pictureURL" : "images/fry.jpg",
    "welcomeMessage": "Welcome to my awesome resume!",
    "display": function() {
        // name and function
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        // contacts
        for (var contact in this.contacts) {
            if (this.contacts.hasOwnProperty(contact)) {
                var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", this.contacts[contact]);
                $("#topContacts").append(formattedContact);
                $("#footerContacts").append(formattedContact);
            }
        }

        // profile picture
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
        $("#header").append(formattedBioPic);

        // welcome message
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);

        // Skills
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

var education = {
    "schools" : [
        {
            "name": "Universidade Estadual de Campinas",
            "location": "Campinas, SP, Brazil",
            "dates": "2013 - Current",
            "degree": "BA",
            "majors": ["Computer Science"],
            "url": "http://www.ic.unicamp.br/graduacao/ciencia-da-computacao"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        },
        {
            "title": "BEPiD",
            "school": "Instituto de Pesquisas Eldorado",
            "dates": "2015-2016",
            "url": "http://www.bepid.com/campinas/Pages/Default.aspx"
        }
    ],
    "display": function() {

        // schools
        for (var school in this.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry:last").append(formattedName.concat(formattedDegree));
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedMajors = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
            $(".education-entry:last").append(formattedMajors);
        }

        // online courses
        $("#education").append(HTMLonlineClasses);
        for (var course in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            $(".education-entry:last").append(formattedOnlineTitle.concat(formattedSchool));

            var formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDate);

            var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
}

var projects = {
    "projects": [
        {
            "title": "Fly Away",
            "dates": "2016-2017",
            "description": "Um app voltado para a comunidade de voo livre. Onde os pilotos podem ver em tempo real como estão as condições das pistas e conversar com outros pilotos.",
            "images": [
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        },
        {
            "title": "Inkster",
            "dates": "2016",
            "description": "Um app voltado aos amantes de tatuagem. Siga o trabalho de diversos tatuadores em todo o Brasil.",
            "images": [
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        },
        {
            "title": "Horae",
            "dates": "2016",
            "description": "Uma ferramenta simples e objetiva para ajudar você a alcançar seus objetivos por meio da Pomodoro Technique®.",
            "images": [
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        }
    ]
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var images = projects.projects[project].images
        if (images.lenght > 0 ) {
            for (var image in images) {
                var formattedImage = HTMLprojectImage.replace("%data%", images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Globo",
            "title": "iOS Developer",
            "location": "Campinas, SP, Brazil",
            "dates": 2017,
            "description": "Desenvolvimento de um aplicativo voltado ao público infantil. utilizando Objc-c"
        },
        {
            "employer": "Nextel",
            "title": "iOS Developer",
            "location": "Campinas, SP, Brazil",
            "dates": 2017,
            "description": "Desenvolvimento de um aplicativo para o serviço Nextel Happy. Desenvolvido em Swift."
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
