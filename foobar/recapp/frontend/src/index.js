

const render = () => {
    const state = {
        questions: [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?', link: '', isAnswered: false},
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?', link: '', isAnswered: true },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?', link: '', isAnswered: false }
        ]
    };

    const App = document.createElement('div');
    App.innerText = 'Hello World (now with javascript)';

    const QuestionForm = document.createElement('form');

    const h1 = document.createElement('h1');
    h1.innerText = 'Ask a Question';

    const name = document.createElement('input');
    name.name = 'name';
    name.type = 'text';
    name.placeholder = 'Name';

    const content = document.createElement('textarea');
    content.rows = 3;
    content.name = 'content';
    content.type = 'text';
    content.placeholder = 'Ask your question here...';

    const link = document.createElement('input');
    link.name = 'link';
    link.type = 'text';
    link.placeholder = 'Link to resource';

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'Submit';

    QuestionForm.append(h1, name, content, submit);

    const Questions = document.createElement('div');

    const generateQuestions = () => {
        if (!state.questions.length) return Questions.innerText = 'No Questions Yet...';
        state.questions.reverse().map((q, i)=> {
                const formattedQuestion = document.createElement('div');
                formattedQuestion.key = i;

                const name = document.createElement('span');
                name.innerText = q.name;

                const content = document.createElement('h3');
                content.innerText = q.content;

                const link = document.createElement('a');
                link.innerText = q.link;

                const isAnswered = document.createElement('button');
                isAnswered.innerText = q.isAnswered ? 'Answered' : 'Not Answered';

                const delButton = document.createElement('button');
                delButton.innerText = 'Delete';

                formattedQuestion.append(name, content, link, isAnswered, delButton);

                Questions.appendChild(formattedQuestion);
        });
    };


    App.append(QuestionForm);

    const root = document.getElementById('root');
    root.append(App);

    generateQuestions();
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
