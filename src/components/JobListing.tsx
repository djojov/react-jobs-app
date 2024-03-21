type JobType = {
	id: string;
	title: string;
	type: string;
	description: string;
	location: string;
	salary: string;
	company: {
		name: string;
		description: string;
		contactEmail: string;
		contactPhone: string;
	};
};

interface JobListingProps {
	job: JobType;
}

export default function JobListing(props: JobListingProps) {
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{props.job.id}</div>
					<h3 className="text-xl font-bold">{props.job.title}</h3>
				</div>

				<div className="mb-5">{props.job.description}</div>

				<h3 className="text-indigo-500 mb-2">{props.job.salary}</h3>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="text-orange-700 mb-3">
						<i className="fa-solid fa-location-dot text-lg"></i>
						{props.job.location}
					</div>
					<a
						href={`/job/${props.job.id}`}
						className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
}
