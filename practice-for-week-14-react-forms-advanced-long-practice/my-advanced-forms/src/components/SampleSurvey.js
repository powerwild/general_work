import surveyQuestions from '../_assets/sample.json';

export const SampleSurvey = () => {
    const { name, instructions, thankyou, copyright, questions } = surveyQuestions;
    const survQuests = questions.slice(0, 3);
    const personQuests = questions.slice(4);
    console.log(surveyQuestions)
    console.log(questions)
    return (
        <>
            <h2>{name}</h2>
            <h4>{instructions}</h4>
            <form>
                {survQuests.forEach(question => {
                   return (
                <>
                    <label>{question.stem}</label>
                    {question.lines > 1 && <textarea></textarea>}
                    {question.lines === 1 && <input type='text'></input>}
                    {question.type === 'mcq') {
                        question.options.map(answer => {
                            return <>
                                        <button type='radio' name={`${answer.value}`} value={answer.value}></button>
                                        <label htmlFor={`${answer.value}`}>{answer.text}</label>
                                    </>
                        })
                    })}
                </>
                })}
                <h3>{questions[3].title}</h3>
                <h4>{questions[3].instructions}</h4>
                {personQuests.forEach((question, i) => {
                    return <>
                    <label htmlFor={`question${i}`}>{question.stem}</label>
                    {question.lines > 1 ? <textarea name={`question${i}`}></textarea> :
                    <input type='text' name={`question${i}`}></input>

                    }
                    </>
                })}
            </form>
        </>
    )
}
