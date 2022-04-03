/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: 'Disaster Management', description: 'Mike Moses' },
  {
    name: 'Safety & Security',
    description: 'Robbert Rijkers',
  },
  { name: 'Education', description: 'Rachel Browne' },
  { name: 'Health Liason', description: 'Johannes Syms' },
  { name: 'Environment', description: 'Lynn Schluter' },
  { name: 'Emerging Farmers', description: 'James Pheiffer' },
  { name: 'Business Development', description: 'Mark Townsend' },
  { name: 'Sport', description: 'Solwethu Gonya' },
  { name: 'Cultural Events', description: 'Mathemba Sigunu' },
  { name: 'Housing & Development', description: 'Jayne Beaumont' },
  { name: 'Social Development', description: 'Ruth Odigie' },
  { name: 'Churches', description: 'Siyabonga Kondile' },
];

export const Content = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who Is BCV?
          </h2>
          <p className="mt-4 text-gray-700">
            BCV is a non-political group of Botrivier residents working on a
            voluntary basis to bring improvements to our rural town. BCV started
            in 2020, and we are a multi- cultural group from varying economic
            backgrounds.
          </p>
          <p className="mt-4 text-gray-700">
            Botrivier’s population has grown very quickly over the past 10
            years, and one of our biggest challenges as a town is unemployment.
            Part of BCV’s focus is to create awareness about the skills and
            services available within our town so that we can support each
            other.
          </p>
          <h3 className="mt-16 text-3xl sm:text-4xl font-medium">
            BCV Portfolios
          </h3>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/images/children.jpg"
            alt="flowers"
            className="bg-gray-100 rounded-lg h-full object-cover shadow"
          />
          <img
            src="/images/farmer.jpg"
            alt="lagoon"
            className="bg-gray-100 rounded-lg h-full object-cover shadow"
          />
          <img
            src="/images/aerial.jpg"
            alt="sunrise"
            className="bg-gray-100 rounded-lg h-full object-cover shadow"
          />
          <img
            src="/images/valley.jpg"
            alt="valley"
            className="bg-gray-100 rounded-lg h-full object-cover shadow"
          />
        </div>
      </div>
    </div>
  );
};
