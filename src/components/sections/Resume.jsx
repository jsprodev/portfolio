export const Resume = () => {
  return (
    <section id="resume" className="flex flex-col gap-10 justify-center items-center">
      <div className="container max-w-5xl mx-auto p-4 my-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 animate-gradient text-white p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="h-40 w-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left md:pl-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Muhammad Umair Arshad</h1>
                <h2 className="text-xl md:text-2xl font-medium mb-4">Frontend Developer</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">umairarshad6697@gmail.com</span>
                  </div>

                  <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                      />
                    </svg>
                    <span className="text-sm">linkedin.com/in/umairarshad-dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Summary
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                  <p className="text-gray-600">
                    I'm a dedicated Frontend Developer with expertise in React, Remix, and TypeScript, focused on
                    crafting scalable, high-performance web applications. I specialize in creating seamless user
                    experiences through clean, efficient, and responsive UI design. With a strong foundation in modern
                    web technologies, I enjoy solving complex problems and building interactive digital solutions. I'm
                    always eager to learn, innovate, and contribute to projects that make an impact.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Professional Experience
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>

                  <div className="mb-6 relative pl-6 border-l-2 border-blue-200">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                    <h3 className="text-lg font-bold text-gray-800">Pakipreneurs | Frontend Developer</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">January 2025 - Present (4 months)</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-blue-200">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                    <h3 className="text-lg font-bold text-gray-800">Urbanloop Tech | Frontend Developer</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      November 2023 - December 2024 (1 year 2 months)
                    </p>
                    <p className="font-medium text-sm text-gray-700 mt-2">Key Contributions:</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>
                        Built and optimized web applications with React.js, Remix, and TypeScript to enhance performance
                      </li>
                      <li>
                        Designed and implemented responsive UI components using Tailwind CSS for cross-device
                        compatibility
                      </li>
                      <li>Collaborated with designers and backend developers to create intuitive user experiences</li>
                      <li>Focused on performance optimization, accessibility, and best coding practices</li>
                    </ul>
                    <p className="font-medium text-sm text-gray-700 mt-2">Key Skills:</p>
                    <p className="text-sm text-gray-600">
                      React.js | Remix | TypeScript | JavaScript | Tailwind CSS | API Integrations | UI/UX Development |
                      Performance Optimization
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>

                  <div className="mb-4 p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r">
                    <h3 className="text-lg font-semibold text-gray-800">Agile Principles and Methodologies Course</h3>
                  </div>

                  <div className="mb-4 p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r">
                    <h3 className="text-lg font-semibold text-gray-800">Front-End Engineer Career Path</h3>
                  </div>

                  <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r">
                    <h3 className="text-lg font-semibold text-gray-800">Learn CSS: Responsive Design Course</h3>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Skills
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"
                          ></path>
                        </svg>
                      </div>
                      <span className="font-medium">React</span>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                            //   fill="currentColor"
                          />
                          <path
                            fill="currentColor"
                            d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                            //   fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">TypeScript</span>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"
                          ></path>
                        </svg>
                      </div>
                      <span className="font-medium">Remix</span>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296M13.9868 5L10.0132 19.8297M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          ></path>
                        </svg>
                      </div>
                      <span className="font-medium">Tailwind CSS</span>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515 515" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M193.918,208.369c-4.729-10.456-6.849-22.652-3.236-33.731c3.612-11.327,11.703-20.413,19.794-28.878 c22.525-22.531,50.285-39.085,72.316-61.986c12.197-12.573,22.278-27.634,25.762-44.937c2.864-12.695,1.496-25.764-1.117-38.337 c11.7,13.319,15.559,32.363,12.197,49.541c-3.608,19.292-14.316,36.344-26.886,51.031c-10.081,11.827-21.659,22.282-33.731,31.993 c-14.065,11.327-27.88,23.524-36.716,39.457c-7.472,12.943-9.215,28.876-4.11,42.942c8.341,24.146,27.756,42.071,38.338,64.848 c-11.703-10.332-23.152-21.036-33.86-32.361C211.471,236.001,200.889,223.307,193.918,208.369z"
                          ></path>
                        </svg>
                      </div>
                      <span className="font-medium">JavaScript</span>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                          <path
                            fill="currentColor"
                            d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">CSS</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    Education
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>

                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-blue-200">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-xs font-semibold text-blue-600">April 2019 - May 2021</p>
                        <h3 className="font-semibold">Punjab Group Of Colleges</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm">umairarshad6697@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                        />
                      </svg>
                      <span className="text-sm">linkedin.com/in/umairarshad-dev</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      <span className="text-sm">portfolio-five-flame-90.vercel.app</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
            <p>Designed with Tailwind CSS | © 2025 Muhammad Umair Arshad</p>
          </div>
        </div>
      </div>
    </section>
  );
};
