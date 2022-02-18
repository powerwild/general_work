import { createContext, useContext } from "react";
import { useState } from "react";

export const SurveyReportContext = createContext();
export const useReportContext = () => useContext(SurveyReportContext);

export const ReportContextProvider = ({children}) => {
    const [report, setReport] = useState({v: 0, a: 0, k: 0});


    return (
        <SurveyReportContext.Provider value={report, setReport}>
            {children}
        </SurveyReportContext.Provider>
    )
}
