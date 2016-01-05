/**
 * @author Marenin Alexander
 * @date January 2016
 */


var postsData = [
    {
        nickname: 'ivan',
        at: '4 hours ago',
        content: 'My first text'
    },
    {
        nickname: 'boris_sexy',
        at: '6 hours ago',
        content: 'Does anyone knows me?'
    },
    {
        nickname: 'boris_sexy',
        at: '12 hours ago',
        content: 'I\'m the Chosen One'
    }
];

Template.postsList.helpers({
    posts: postsData
});