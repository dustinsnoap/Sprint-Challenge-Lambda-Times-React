1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for type-checking in React. They allow you to specify the expectations surrounding a received prop. For example, you can use them to describe the expected element type (array, object, string, etc.) and whether the prop is optional or required. Type-checking helps developers narrow prop specificity and locate type deviations.

2. Describe a life-cycle event in React?

A life-cycle refers to specific events in a components lifespan. There are three phases: mounting (birth), updating (growth), and unmounting (death). These phase phases and the transitions between them can be used to trigger specific actions when they occur.

3. Explain the details of a Higher Order Component?
A higher order component is a function that takes in a component as an argument and returns a component basic on it's logic. This enhances the reusability by minimizing repetition of similar components.

4. What are three different ways to style components in React? Explain some of the benefits of each.
-Importing a CSS File: Classic approach, quick and to the point, just works.
-CSS Modules: CSS lives in one place and can only be applied to the components it's imported on. Nothing else.
-Styled Components: All styling can be done in one place; LESS-like logic, normal looking CSS.