export const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-10">
      <h1 className="min-w-full">Experience</h1>
      <ol className="relative flex flex-col gap-y-10 text-muted-foreground before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full border-2 border-blue-600 bg-white"></span>
            <div>
              <time className="block text-sm -mt-1">July 2024 - Present</time>
              <h3 className="text-lg/[1.4] font-semibold mb-0">Freelancer</h3>
              <p className="">Working as a freelance Front End Developer.</p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full border-2 border-blue-600 bg-white"></span>
            <div>
              <time className="block text-sm -mt-1">Dec 2019 - Jun 2022</time>
              <h3 className="text-lg/[1.4] font-semibold mt-1 mb-0">
                Front End Developer -{" "}
                <i className="text-blue-600">
                  <a href="https://www.linkedin.com/company/virtelligence" target="_blank" rel="noopener noreferrer">
                    Virtelligence
                  </a>
                </i>
              </h3>
              <p className="mt-1">
                Developed user interface of new features and improved the user experience of existing features of &nbsp;
                <a
                  className="text-blue-600"
                  href="https://www.recruitbpm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RecruitBPM
                </a>
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full border-2 border-blue-600 bg-white"></span>
            <div>
              <time className="block text-sm -mt-1">Aug 2016 - Nov 2019</time>
              <h3 className="text-lg/[1.4] font-semibold mt-1 mb-0">
                Quality Assurance Analyst -{" "}
                <i className="text-blue-600">
                  <a href="https://www.linkedin.com/company/virtelligence" target="_blank" rel="noopener noreferrer">
                    Virtelligence
                  </a>
                </i>
              </h3>
              <p className="mt-1">
                Designed and implemented test plans for{" "}
                <a
                  className="text-blue-600"
                  href="https://www.recruitbpm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RecruitBPM
                </a>
                .{" "}
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full border-2 border-blue-600 bg-white"></span>
            <div>
              <time className="block text-sm -mt-1">Jan 2016 - Jul 2016</time>
              <h3 className="text-lg/[1.4] font-semibold mt-1 mb-0">
                Associate Front End Developer -{" "}
                <i className="text-blue-600">
                  <a href="https://www.linkedin.com/company/nimble-geeks" target="_blank" rel="noopener noreferrer">
                    Nimble Geeks
                  </a>
                </i>
              </h3>
              <p className="mt-1">Worked as Front End Developer on several projects.</p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>
      </ol>
    </section>
  );
};
