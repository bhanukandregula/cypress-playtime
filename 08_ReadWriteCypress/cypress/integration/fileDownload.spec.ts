/// <reference types="cypress-downloadfile"/>

describe('file download tests', function(){
    it('file download', function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    });
});