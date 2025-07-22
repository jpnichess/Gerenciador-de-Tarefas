import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-orange-100 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 mb-6 text-orange-700 font-extrabold"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-orange-200 p-4 rounded-md text-center">
          <h1 className="text-xl font-bold text-orange-700">{title}</h1>
          <p className="text-orange-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;