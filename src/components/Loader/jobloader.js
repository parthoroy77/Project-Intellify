const jobDetails = async(id) => {
    const res = await fetch('jobs.json');
    const data = await res.json();
    const find = data.find(job => job.id == id);
    return find
}

export default jobDetails