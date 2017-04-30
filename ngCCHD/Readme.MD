Copyright (c) <2017> <Ehren Lillies> www.xscoding.com

This is the makings of an Angular 4 application to automate Critical Congenital Heart Disease.

The heart of this is in src/app/cchd/cchd.compnent.ts and src/app/cchd/ts/Screen.ts.

At this stage, the project is incomplete. The goal will be to create a standalone Angular4 applicaiton for screening for CCHD.

There is are many bugs. I have also placed some friendly todos.

There are some services which are not used, which will likely be removed in the future.

There is a lot of opportunity for refactoring.

When completed I intend to release this as open source. It falls under MIT licencing which means it can be used in accordance to the terms listed bellow, which includes free use in commercial applications.

I couldn't find any similar projects on GitHub, and it's too far along to not be finished.

Build instructions:
1. Install node.
2. Install angular cli:
    npm install -g @angular/cli
3. Update dependencies with npm:
    npm install
4. To run:
    ng serve

Planned features:
    - User friendly UI with interactive data validation.
    - Locally save testing with file import/export capabilities.
    - Capability to take notes manually.

Possible commercial use:
    - Cloud based storage.
    - Integration with existing hospital data.
    - Open to other suggestions...

Other notes:
    - Anyone not just myself can use the open source portion in a commercial application.
    - If improvements are made to the open source code in a commercial application, I would ask but 
    do not require these changes be made available to the open source community.   
    - At this point, the application is none-functional... let's fix that!
________________________________________________________________________________________________

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.