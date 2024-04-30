# LiveButtons

Assignment Task:- Akhand Pratap Singh

Develop a web application without a login page that utilizes a single URL to differentiate between users. Upon accessing the URL, users will encounter an activate button. Once activated, users will be presented with three buttons labeled A, B, and C. Each button will have a distinct color: A (green), B (red), and C (yellow).

When a user clicks on any of the buttons (A, B, or C), it becomes inactive for the other user and is highlighted. This behavior should apply even if users open the application in two different browser tabs.

The application should maintain this state across both users, ensuring that each user's interaction affects the buttons' statuses independently, regardless of whether they are using the same browser window or different tabs.

Please implement the assignment using suitable web development technologies and provide documentation explaining the design choices and implementation details.

Example scenario:

Suppose we have two users, User 1 and User 2, accessing the web application from different devices or browser tabs. They both visit the same URL, and they see the same set of buttons: A, B, and C.

1. **Initial State**:
   - Both users see the "Activate" button.
   - Upon activation, the three buttons (A, B, and C) become enabled for both users.

2. **User 1 Interaction**:
   - User 1 clicks on button B.
   - Button B becomes highlighted and inactive for User 1.
   - Button B remains active for User 2.

3. **User 2 Interaction**:
   - User 2 clicks on button A.
   - Button A becomes highlighted and inactive for User 2.
   - Button A remains active for User 1.

4. **Further Interactions**:
   - User 1 clicks on button C.
   - Button C becomes highlighted and inactive for User 1.
   - Button C remains active for User 2.

5. **Real-Time Communication**:
   - Throughout these interactions, User 1 and User 2 receive real-time updates about each other's button clicks. For example, when User 1 clicks on button B, User 2 immediately sees button B becoming inactive.



Live Link of this task
```bash
https://livebuttons.onrender.com/