import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { JobType } from './components/JobListing';
import MainLayout from './layouts/MainLayout';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import HomePage from './pages/HomePage';
import JobPage, { jobLoader } from './pages/JobPage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	const addJob = async (newJob: JobType) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newJob),
		});
		return;
	};

	const deleteJob = async (id: string) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	};

	const updateJob = async (updatedJob: JobType) => {
		const res = await fetch(`/api/jobs/${updatedJob.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedJob),
		});
		return;
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="jobs" element={<JobsPage />} />
				<Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
				<Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
				<Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
