import i18n from "../components/translations/i18Initializer";

const projects = [
    {
      id : 0,
      title: i18n.t('projects.project2.title'),
      description: i18n.t('projects.project2.description'),
      imagesCount: 150,
      imageBaseName: "project2/image1x",
      fullImage: "project2/musicplayer.jpg",
      githubLink:"https://github.com/yourgithubprofile/yourprojectrepo"
    },
    {
      id : 1,
      title: i18n.t("projects.project1.title"),
      description: i18n.t('projects.project1.description'),
      imagesCount: 77,
      imageBaseName: "project1/image1x",
      fullImage: "project1/project1completeimage.jpg",
      githubLink:"https://github.com/ismailghedamsi/hiphopalbumreleasedates",
      websiteLink:"https:/www.upcomingrapcalendar.com"
    },
    {
      id : 2,
      title: i18n.t('projects.project3.title'),
      description: i18n.t('projects.project3.description'),
      imagesCount: 20,
      imageBaseName: "project3/image1x",
      fullImage: "project3/project3.jpg",
      githubLink:"https://github.com/ismailghedamsi/InternshipManager"
    },
    {
      id : 3,
      title: i18n.t('projects.project4.title'),
      description: i18n.t('projects.project3.description'),
      imagesCount: 27,
      imageBaseName: "project4/image1x",
      fullImage: "project4/project4.jpg",
    }
  ];

export default projects