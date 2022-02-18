import surveyQuestions from '../_assets/sample.json';

export const SampleSurvey = () => {
    const { name, instructions, thankyou, copyright, questions } = surveyQuestions;
    const survQuests = questions.slice(0, 3);
    const personQuests = questions.slice(4);

    return (
        <>
            <h2>{name}</h2>
            <h4>{instructions}</h4>
            <form className='form'>
                {survQuests.map((question, i) => (
                    <div className='question' key={i}>
                        <label>{question.stem}</label>
                        {question.lines > 1 && <textarea className='text'></textarea>}
                        {question.lines === 1 && <input type='text'></input>}
                        {question.type === 'mcq' &&
                            question.options.map((answer, i) => (
                                <div className='sample-radio' key={i}>
                                    <button type='radio' className='checkbox' name={`${answer.value}`} value={answer.value}></button>
                                    <label htmlFor={`${answer.value}`} className='checkbox-label'>{answer.text}</label>
                                </div>
                        ))}
                    </div>
                ))}
                <h3>{questions[3].title}</h3>
                <h4>{questions[3].instructions}</h4>
                {personQuests.map((question, i) => (
                     <div key={i}>
                        <label htmlFor={`question${i}`}>{question.stem}</label>
                        {question.lines > 1 ? <textarea className='text' name={`question${i}`}></textarea> : <input className='text' type='text' name={`question${i}`}></input>}
                    </div>
                ))}
                <button className='button'>Submit</button>
            </form>
            <p>{`(c) ${copyright.slice(7)}`}</p>
        </>
    )
}
