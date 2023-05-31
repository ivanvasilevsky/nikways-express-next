import { $host } from "@/http/http"

export default function Project({ project }) {

  console.log(project);
  return (
    <div className=''>

    </div>
  )
}

export async function getServerSideProps(context) {

  const project = await $host.get(`/project/${context.params.project}`)

  return {
    props: {
      project: project.data
    }
  }
}