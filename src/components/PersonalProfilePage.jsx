export default function PersonalProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl max-w-3xl w-full overflow-hidden">
        <div className="bg-blue-600 text-white p-10 text-center">
          <img
           /* src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" */
            srx="/1000018147.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
          />

          <h1 className="text-4xl font-bold mt-4">Bolivar Y. Vergara III</h1>
          <p className="text-lg mt-2 opacity-90">
            PowerBuilder Developer | QA Manual Tester | Learning Web Development
          </p>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I am a software developer with experience in PowerBuilder,
              database systems, QA manual testing, and ETL integration.
              Currently exploring modern web development using JavaScript,
              Node.js, React, and Vite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "PowerBuilder",
                "JavaScript",
                "Node.js",
                "SQL",
                "QA Testing",
                "ETL Integration",
                "HTML",
                "CSS",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Projects</h2>

            <div className="space-y-4">
              <div className="border rounded-2xl p-4 hover:shadow-md transition">
                <h3 className="text-xl font-semibold">Pharmacy System</h3>
                <p className="text-gray-600 mt-1">
                  A pharmacy management system built using PowerBuilder 2019 and modern web technologies.
                </p>
              </div>

              <div className="border rounded-2xl p-4 hover:shadow-md transition">
                <h3 className="text-xl font-semibold">Hospital Integration</h3>
                <p className="text-gray-600 mt-1">
                  Experience integrating healthcare systems and ETL data processes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>

            <div className="space-y-2 text-gray-700">
              <p>Email: bolivar1985@yahoo.com</p>
              <p>GitHub: https://github.com/bolivarvergara</p>
              <p>Location: Cebu, Philippines</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
