import WorkItem from './WorkItem';

const Work = () => {
  const data = [
    {
      id: 1,
      year: 2021,
      title: 'Software Development Consultant en Michelin',
      duration: '1 Years',
      details: `I have worked in the development team in IT projects at Michelin in the Front-End area under the agile methodologies scheme.`,
      tasks: [
        `Design of the user interface in Michelin projects, using Frontend
          projects, using Frontend technologies such as React TypeScript Material UI and the company's own libraries.`,
        `Creation of new IT functionalities applied to the user interface of Michelin's platforms.
          to the user interface of Michelin's platforms.`,
        `Implementation of libraries such as React-Query to improve the user experience when
          improve the user experience when querying the information
          information coming from the Back-End.`,
        `Elaboration of multiple FrontEnd related tasks using agile methodologies such as Kanban and Scrum.`,
        `Elaboration of tasks together with developers of
            Back-End developers.`,
        `Elaboration of multiple FrontEnd related tasks using agile methodologies such as Kanban and Scrum.`,
        `Problem reporting for the elaboration of work tickets.`,
      ],
    },
    {
      id: 2,
      year: 2013,
      title: 'Freelance Developer',
      duration: '7 Years',
      details: `Develop a program to monitor prices and inventory status of products from different e-commerce platforms in an automated way with Visual Basic and MySQL.`,
      tasks: [
        `Provide maintenance and scalability to the price tracking application.`,
        `Implement new UI and UX functionalities and features to the application. `,
      ],
    },
  ];
  return (
    <div id='work' className='max-w-[1600px] md:pl-16 py-32 m-auto px-4'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-12'>Experience</h1>
      {data.map((item) => (
        <WorkItem
          key={item.id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          tasks={item.tasks}
        />
      ))}
    </div>
  );
};

export default Work;
