const contents = [
    {
        id: "1",
        ID: "1",
        content: "1",
        name: "1",
    },
    {
        id: "2",
        ID: "2",
        content: "2",
        name: "2",
    },
    {
        id: "3",
        ID: "3",
        content: "3",
        name: "3",
    },
    {
        id: "4",
        ID: "4",
        content: "4",
        name: "4",
    },
    {
        id: "5",
        ID: "5",
        content: "5",
        name: "5",
    }
]


export default class boardApi {
    static getAllContents() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], contents));
        });
    }

    static saveContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            content.id = parseInt(contents[contents.length - 1].id) + 1;
            contents.push(content);

            resolve(content);
        });
    }
}