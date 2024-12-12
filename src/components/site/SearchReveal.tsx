import { SearchResult } from "@/types/SearchResult"

type Props ={
    results: SearchResult;
}
export const SearchReveal = ({ results }: Props) => {
    return(
        <div>
            <p className="text-3xl">{results.person.name}</p>
            <p className="text-2xl my-3">Parabéns, você tirou:</p>
            <p className="text-4xl text-white bg-purple-400 my-5 px-5 py-10 rounded-lg
             border-2 border-dashed border-purple-100">{results.personMatched.name}</p>
        </div>
    );
}