// Question sets added from CAT-1, CAT-2 and the 200 MCQ bank.
// Each topic: n = name, g = group index (see GROUPS in app.js), q = [question, [A,B,C,D], correctIndex, optionalNote]
const EXTRA = [
 {
  "n": "Java Introduction, Features, Structure, Data Types",
  "g": 1,
  "q": [
   [
    "Which company originally developed Java?",
    [
     "Microsoft",
     "Sun Microsystems",
     "Oracle",
     "IBM"
    ],
    1
   ],
   [
    "Which of the following is the correct extension for Java source files?",
    [
     ".class",
     ".java",
     ".jar",
     ".exe"
    ],
    1
   ],
   [
    "Which Java feature allows the same program to run on different operating systems?",
    [
     "Encapsulation",
     "Platform Independence",
     "Inheritance",
     "Polymorphism"
    ],
    1
   ],
   [
    "Which method is the entry point of every Java application?",
    [
     "start()",
     "execute()",
     "main()",
     "run()"
    ],
    2
   ],
   [
    "Which keyword is used to define a class in Java?",
    [
     "object",
     "class",
     "new",
     "define"
    ],
    1
   ],
   [
    "Which component of the JVM loads the required class files into memory?",
    [
     "JIT Compiler",
     "Class Loader",
     "Garbage Collector",
     "Bytecode Verifier"
    ],
    1
   ],
   [
    "Java source code is compiled into which format?",
    [
     "Machine Code",
     "Native Code",
     "Bytecode",
     "Binary Code"
    ],
    2
   ],
   [
    "Which of the following is NOT a Java primitive data type?",
    [
     "int",
     "float",
     "String",
     "char"
    ],
    2
   ],
   [
    "What is the size of the char data type in Java?",
    [
     "8 bits",
     "16 bits",
     "32 bits",
     "Depends on OS"
    ],
    1
   ],
   [
    "Which primitive data type is used to store true or false values?",
    [
     "bool",
     "boolean",
     "Boolean",
     "bit"
    ],
    1
   ],
   [
    "Which primitive data type has the largest range?",
    [
     "int",
     "long",
     "double",
     "byte"
    ],
    2
   ],
   [
    "What is the default value of a boolean instance variable?",
    [
     "true",
     "false",
     "0",
     "null"
    ],
    1
   ],
   [
    "Which statement about Java is TRUE?",
    [
     "Java is platform-dependent",
     "Java supports multiple inheritance through classes",
     "Java uses bytecode executed by JVM",
     "Java does not support OOP"
    ],
    2
   ],
   [
    "Which keyword is used to create an object in Java?",
    [
     "create",
     "object",
     "new",
     "allocate"
    ],
    2
   ],
   [
    "Which of the following is a valid Java identifier?",
    [
     "1number",
     "class",
     "student_Name",
     "total-price"
    ],
    2
   ],
   [
    "Which data type should be used to store a decimal number with high precision?",
    [
     "float",
     "int",
     "double",
     "byte"
    ],
    2
   ],
   [
    "Which of the following statements about String is correct?",
    [
     "String is a primitive type",
     "String is a class",
     "String is a keyword",
     "String is an operator"
    ],
    1
   ],
   [
    "Which of the following is NOT a feature of Java?",
    [
     "Robust",
     "Portable",
     "Pointer Arithmetic",
     "Secure"
    ],
    2
   ],
   [
    "Which statement is mandatory in every standalone Java program?",
    [
     "import java.util.*;",
     "package declaration",
     "public static void main(String[] args)",
     "constructor"
    ],
    2
   ],
   [
    "Consider the code: byte b = 127; b++; System.out.println(b); What is the output?",
    [
     "127",
     "128",
     "-128",
     "Compilation Error"
    ],
    2
   ]
  ]
 },
 {
  "n": "Basic I/O, Operators",
  "g": 1,
  "q": [
   [
    "Which class is commonly used to read input from the keyboard in Java?",
    [
     "System",
     "Scanner",
     "InputReader",
     "ConsoleReader"
    ],
    1
   ],
   [
    "Which package contains the Scanner class?",
    [
     "java.io",
     "java.util",
     "java.lang",
     "java.net"
    ],
    1
   ],
   [
    "Which statement is used to create a Scanner object for keyboard input?",
    [
     "Scanner sc = new Scanner();",
     "Scanner sc = new Scanner(System.in);",
     "Scanner sc = Scanner(System.in);",
     "new Scanner();"
    ],
    1
   ],
   [
    "Which method reads an integer using the Scanner class?",
    [
     "nextInteger()",
     "getInt()",
     "nextInt()",
     "readInt()"
    ],
    2
   ],
   [
    "Which method reads a complete line of text?",
    [
     "next()",
     "nextWord()",
     "nextLine()",
     "readLine()"
    ],
    2
   ],
   [
    "What is the output of System.out.println(10 + 20 + \"Java\"); ?",
    [
     "Java30",
     "1020Java",
     "30Java",
     "Compilation Error"
    ],
    2
   ],
   [
    "What is the output of System.out.println(\"Java\" + 10 + 20); ?",
    [
     "Java30",
     "Java1020",
     "30Java",
     "Compilation Error"
    ],
    1
   ],
   [
    "Which operator is used for the remainder operation?",
    [
     "/",
     "//",
     "%",
     "rem"
    ],
    2
   ],
   [
    "What is the output? int a = 15; int b = 4; System.out.println(a % b);",
    [
     "3",
     "4",
     "2",
     "1"
    ],
    0
   ],
   [
    "Which operator is used for logical AND?",
    [
     "&",
     "&&",
     "OR operator (",
     ")"
    ],
    1
   ],
   [
    "Which operator is used for logical OR?",
    [
     "&&",
     "|",
     "||",
     "!"
    ],
    2
   ],
   [
    "What is the output? int x = 5; System.out.println(++x);",
    [
     "5",
     "6",
     "4",
     "Compilation Error"
    ],
    1
   ],
   [
    "What is the output? int x = 5; System.out.println(x++);",
    [
     "5",
     "6",
     "4",
     "Compilation Error"
    ],
    0
   ],
   [
    "Which of the following expressions evaluates to true?",
    [
     "15 != 15",
     "8 < 5",
     "10 >= 10",
     "7 == 9"
    ],
    2
   ],
   [
    "What is the output of System.out.println(10 > 5 && 8 < 3); ?",
    [
     "true",
     "false",
     "1",
     "Compilation Error"
    ],
    1
   ],
   [
    "Which operator is used to evaluate a condition and return one of two values in Java?",
    [
     "instanceof",
     "::",
     "?: (Ternary Operator)",
     "->"
    ],
    2
   ],
   [
    "What is the output? int a = 10; a += 5; System.out.println(a);",
    [
     "5",
     "10",
     "15",
     "50"
    ],
    2
   ],
   [
    "What is the output? int a = 10; int b = 20; System.out.println(a > b ? a : b);",
    [
     "10",
     "20",
     "true",
     "false"
    ],
    1
   ],
   [
    "What is the output of System.out.println(!(10 > 5)); ?",
    [
     "true",
     "false",
     "10",
     "Compilation Error"
    ],
    1
   ],
   [
    "What is the output? int a = 5; int b = 2; System.out.println((double)a / b);",
    [
     "2",
     "2.0",
     "2.5",
     "Compilation Error"
    ],
    2
   ]
  ]
 },
 {
  "n": "Decision making and Control structures",
  "g": 1,
  "q": [
   [
    "Which statement is used to execute a block of code only when a condition is true?",
    [
     "switch",
     "if",
     "for",
     "while"
    ],
    1
   ],
   [
    "Which control structure is best suited when checking multiple conditions in sequence?",
    [
     "if",
     "nested if",
     "else-if ladder",
     "do-while"
    ],
    2
   ],
   [
    "Which statement is mandatory in every switch case to prevent fall-through?",
    [
     "break",
     "continue",
     "return",
     "exit"
    ],
    0
   ],
   [
    "Which loop guarantees that the loop body executes at least once?",
    [
     "for",
     "while",
     "do-while",
     "enhanced for"
    ],
    2
   ],
   [
    "What is the output? int x = 5; if(x > 3) System.out.print(\"A\"); else System.out.print(\"B\");",
    [
     "A",
     "B",
     "AB",
     "Compilation Error"
    ],
    0
   ],
   [
    "Which loop is generally preferred when the number of iterations is known?",
    [
     "while",
     "do-while",
     "for",
     "switch"
    ],
    2
   ],
   [
    "What is the output? int x = 8; if(x % 2 == 0) System.out.print(\"Even\"); else System.out.print(\"Odd\");",
    [
     "Odd",
     "Even",
     "8",
     "Compilation Error"
    ],
    1
   ],
   [
    "Which keyword skips the current iteration of a loop?",
    [
     "break",
     "exit",
     "continue",
     "skip"
    ],
    2
   ],
   [
    "Which keyword immediately terminates the nearest enclosing loop?",
    [
     "continue",
     "break",
     "return",
     "stop"
    ],
    1
   ],
   [
    "What is the output? for(int i=1;i<=3;i++) System.out.print(i);",
    [
     "123",
     "12",
     "321",
     "Compilation Error"
    ],
    0
   ],
   [
    "What is the output? int i=1; while(i<=3){ System.out.print(i); i++; }",
    [
     "123",
     "12",
     "321",
     "Infinite Loop"
    ],
    0
   ],
   [
    "What is the output? int i=1; do{ System.out.print(i); i++; }while(i<1);",
    [
     "1",
     "Nothing",
     "Infinite Loop",
     "Compilation Error"
    ],
    0
   ],
   [
    "Which of the following is TRUE about the switch statement in Java?",
    [
     "It works only with int",
     "It supports String values",
     "It cannot use char",
     "It supports only boolean"
    ],
    1
   ],
   [
    "What is the output? int x=10; if(x>5) if(x<20) System.out.print(\"A\"); else System.out.print(\"B\");",
    [
     "A",
     "B",
     "AB",
     "Compilation Error"
    ],
    0
   ],
   [
    "Which loop is specifically designed to iterate through arrays or collections?",
    [
     "while",
     "do-while",
     "enhanced for",
     "switch"
    ],
    2
   ],
   [
    "What is the output? for(int i=1;i<=5;i++){ if(i==3) continue; System.out.print(i); }",
    [
     "12345",
     "1245",
     "345",
     "125"
    ],
    1
   ],
   [
    "What is the output? for(int i=1;i<=5;i++){ if(i==3) break; System.out.print(i); }",
    [
     "12345",
     "1245",
     "12",
     "345"
    ],
    2
   ],
   [
    "What is the output? int sum=0; for(int i=1;i<=5;i++) sum+=i; System.out.print(sum);",
    [
     "10",
     "15",
     "20",
     "25"
    ],
    1
   ],
   [
    "What will be the output? int i=5; while(i>0){ System.out.print(i+\" \"); i-=2; }",
    [
     "2001-05-03 00:00:00",
     "5 4 3 2 1",
     "2026-05-02 00:00:00",
     "Infinite Loop"
    ],
    0
   ],
   [
    "What is the output? int x=2; switch(x){ case 1: System.out.print(\"One\"); case 2: System.out.print(\"Two\"); case 3: System.out.print(\"Three\"); default: System.out.print(\"Default\"); }",
    [
     "Two",
     "TwoThree",
     "TwoThreeDefault",
     "Compilation Error"
    ],
    2
   ]
  ]
 },
 {
  "n": "Introduction to Algorithms",
  "g": 1,
  "q": [
   [
    "What is an algorithm?",
    [
     "A programming language",
     "A step-by-step procedure to solve a problem",
     "A compiler",
     "A database"
    ],
    1
   ],
   [
    "Which of the following is NOT a characteristic of an algorithm?",
    [
     "Finiteness",
     "Definiteness",
     "Ambiguity",
     "Effectiveness"
    ],
    2
   ],
   [
    "Which representation describes an algorithm using structured English-like statements?",
    [
     "Machine Code",
     "Pseudocode",
     "Bytecode",
     "Assembly Code"
    ],
    1
   ],
   [
    "Which diagram is commonly used to represent the flow of an algorithm?",
    [
     "ER Diagram",
     "Flowchart",
     "Network Diagram",
     "UML Class Diagram"
    ],
    1
   ],
   [
    "Which flowchart symbol is used to represent a decision?",
    [
     "Rectangle",
     "Diamond",
     "Oval",
     "Circle"
    ],
    1
   ],
   [
    "Which type of algorithm solves a problem by breaking it into smaller subproblems, solving them recursively, and combining the results?",
    [
     "Greedy Algorithm",
     "Divide and Conquer",
     "Brute Force",
     "Backtracking"
    ],
    1
   ],
   [
    "Which algorithmic technique makes the locally optimal choice at each step to obtain a solution?",
    [
     "Dynamic Programming",
     "Greedy Algorithm",
     "Branch and Bound",
     "Divide and Conquer"
    ],
    1
   ],
   [
    "Which type of algorithm stores solutions to overlapping subproblems to avoid repeated computations?",
    [
     "Greedy Algorithm",
     "Dynamic Programming",
     "Brute Force",
     "Recursive Backtracking"
    ],
    1
   ],
   [
    "Which algorithmic technique systematically tries all possible solutions and abandons a path when it cannot lead to a valid solution?",
    [
     "Divide and Conquer",
     "Greedy Algorithm",
     "Backtracking",
     "Hashing"
    ],
    2
   ],
   [
    "Which type of algorithm explores all possible solutions without using optimization techniques?",
    [
     "Brute Force",
     "Greedy",
     "Dynamic Programming",
     "Divide and Conquer"
    ],
    0
   ],
   [
    "Which algorithmic technique is commonly used in solving the N-Queens and Sudoku problems?",
    [
     "Greedy Algorithm",
     "Backtracking",
     "Divide and Conquer",
     "Searching"
    ],
    1
   ],
   [
    "Which type of algorithm is best known for solving the shortest path problem in graphs using locally optimal choices?",
    [
     "Dynamic Programming",
     "Greedy Algorithm",
     "Brute Force",
     "Recursive Algorithm"
    ],
    1
   ],
   [
    "Which searching algorithm examines elements one by one until the target is found?",
    [
     "Binary Search",
     "Linear Search",
     "Interpolation Search",
     "Hash Search"
    ],
    1
   ],
   [
    "Binary Search requires the data to be ________.",
    [
     "Random",
     "Sorted",
     "Duplicate",
     "Continuous"
    ],
    1
   ],
   [
    "Which sorting algorithm repeatedly swaps adjacent elements when they are in the wrong order?",
    [
     "Selection Sort",
     "Bubble Sort",
     "Merge Sort",
     "Heap Sort"
    ],
    1
   ],
   [
    "Which sorting algorithm repeatedly selects the smallest element from the unsorted portion and places it at the beginning?",
    [
     "Bubble Sort",
     "Selection Sort",
     "Insertion Sort",
     "Quick Sort"
    ],
    1
   ],
   [
    "Which approach solves a problem by allowing a function to call itself?",
    [
     "Iteration",
     "Recursion",
     "Branching",
     "Selection"
    ],
    1
   ],
   [
    "Every recursive algorithm must include a ________ to stop further recursive calls.",
    [
     "Loop",
     "Base Case",
     "Switch Statement",
     "Constructor"
    ],
    1
   ],
   [
    "Which of the following is an advantage of using algorithms before coding?",
    [
     "Increases syntax errors",
     "Makes debugging difficult",
     "Improves problem understanding",
     "Eliminates testing"
    ],
    2
   ],
   [
    "Which algorithmic paradigm combines solutions of smaller overlapping subproblems to solve a larger problem efficiently?",
    [
     "Divide and Conquer",
     "Dynamic Programming",
     "Greedy Algorithm",
     "Brute Force"
    ],
    1
   ]
  ]
 },
 {
  "n": "Time & Space complexity-1.1",
  "g": 1,
  "q": [
   [
    "Which notation represents the upper bound of an algorithm's running time?",
    [
     "Big-Ω",
     "Big-Θ",
     "Big-O",
     "Small-o"
    ],
    2
   ],
   [
    "Which notation represents the lower bound of an algorithm's running time?",
    [
     "Big-O",
     "Big-Θ",
     "Big-Ω",
     "Big-C"
    ],
    2
   ],
   [
    "Which notation represents the tight bound of an algorithm's running time?",
    [
     "Big-O",
     "Big-Θ",
     "Big-Ω",
     "Big-Delta"
    ],
    1
   ],
   [
    "Which case of complexity describes the maximum number of operations performed by an algorithm?",
    [
     "Best Case",
     "Average Case",
     "Worst Case",
     "Optimal Case"
    ],
    2
   ],
   [
    "Which case of complexity represents the minimum number of operations performed?",
    [
     "Worst Case",
     "Best Case",
     "Average Case",
     "Expected Case"
    ],
    1
   ],
   [
    "Which notation ignores constant factors and lower-order terms?",
    [
     "Binary Notation",
     "Big-O Notation",
     "Decimal Notation",
     "Hexadecimal Notation"
    ],
    1
   ],
   [
    "Which of the following grows the slowest as the input size increases?",
    [
     "O(n²)",
     "O(n)",
     "O(log n)",
     "O(n log n)"
    ],
    2
   ],
   [
    "Which of the following has the fastest growth rate?",
    [
     "O(log n)",
     "O(n)",
     "O(n²)",
     "O(2ⁿ)"
    ],
    3
   ],
   [
    "What is the time complexity of accessing an element in an array using its index?",
    [
     "O(n)",
     "O(log n)",
     "O(1)",
     "O(n²)"
    ],
    2
   ],
   [
    "What is the space complexity of storing an array of n integers?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "What is the time complexity of the following code? for(int i=0; i<n; i++)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "What is the time complexity of the following code? for(i=0;i<n;i++) for(j=0;j<n;j++)",
    [
     "O(n)",
     "O(n log n)",
     "O(n²)",
     "O(2ⁿ)"
    ],
    2
   ],
   [
    "What is the time complexity of the following loop? for(int i=1; i<n; i=i*2)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    1
   ],
   [
    "What is the time complexity of the following code? for(i=n;i>0;i--)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Two consecutive loops each run n times. What is the overall time complexity?",
    [
     "O(n²)",
     "O(n)",
     "O(log n)",
     "O(1)"
    ],
    1
   ],
   [
    "What is the time complexity of a loop that executes exactly 100 times, regardless of n?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(100n)"
    ],
    0
   ],
   [
    "Which complexity is generally considered the most efficient for large inputs?",
    [
     "O(2ⁿ)",
     "O(n²)",
     "O(log n)",
     "O(n!)"
    ],
    2
   ],
   [
    "Which of the following is not an asymptotic notation?",
    [
     "Big-O",
     "Big-Ω",
     "Big-Θ",
     "Big-P"
    ],
    3
   ],
   [
    "Which of the following correctly orders the complexities from best to worst growth?",
    [
     "O(n²), O(n), O(log n), O(1)",
     "O(1), O(log n), O(n), O(n²)",
     "O(log n), O(1), O(n²), O(n)",
     "O(n), O(1), O(log n), O(n²)"
    ],
    1
   ],
   [
    "Which complexity class is commonly associated with algorithms that repeatedly divide the input into two halves?",
    [
     "O(n²)",
     "O(n)",
     "O(log n)",
     "O(2ⁿ)"
    ],
    2
   ]
  ]
 },
 {
  "n": "Time & Space complexity-1.2",
  "g": 1,
  "q": [
   [
    "What is the time complexity of the following code?for(int i=0;i<n;i++) for(int j=0;j<i;j++)",
    [
     "O(n)",
     "O(log n)",
     "O(n²)",
     "O(n³)"
    ],
    2
   ],
   [
    "What is the time complexity of the following code?for(int i=1;i<=n;i=i*3)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    1
   ],
   [
    "What is the time complexity of the following code?for(int i=n;i>1;i=i/2)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    1
   ],
   [
    "What is the time complexity of the following code?for(int i=0;i<n;i++) for(int j=0;j<100;j++)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "What is the overall time complexity of two nested loops, where the outer loop runs n times and the inner loop runs m times?",
    [
     "O(n+m)",
     "O(nm)",
     "O(n²)",
     "O(m²)"
    ],
    1
   ],
   [
    "Which complexity best describes a recursive function that makes one recursive call until n becomes 0?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which complexity best describes a recursive function that divides the problem size by 2 in each call?",
    [
     "O(n²)",
     "O(n)",
     "O(log n)",
     "O(2ⁿ)"
    ],
    2
   ],
   [
    "What is the auxiliary space complexity of a recursive function with recursion depth n?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which of the following does not affect time complexity?",
    [
     "Number of loop iterations",
     "Number of recursive calls",
     "Variable names",
     "Input size"
    ],
    2
   ],
   [
    "Which of the following contributes to auxiliary space complexity?",
    [
     "Input array",
     "Function call stack",
     "Number of comparisons",
     "Number of iterations"
    ],
    1
   ],
   [
    "What is the space complexity of an algorithm that uses only a few variables regardless of input size?",
    [
     "O(n)",
     "O(log n)",
     "O(1)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which notation describes the exact asymptotic bound of an algorithm?",
    [
     "Big-O",
     "Big-Ω",
     "Big-Θ",
     "Big-Δ"
    ],
    2
   ],
   [
    "Which notation is mainly used to express the worst-case running time?",
    [
     "Big-Ω",
     "Big-Θ",
     "Big-O",
     "Big-π"
    ],
    2
   ],
   [
    "Which of the following complexities is better for large input sizes?",
    [
     "O(n²)",
     "O(n log n)",
     "O(n)",
     "O(log n)"
    ],
    3
   ],
   [
    "What is the time complexity of the following code?for(int i=0;i<n;i++) if(i%2==0)",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "If an algorithm processes every element exactly once, its time complexity is generally",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "What is the time complexity of the following code?for(int i=1;i<n;i*=2) for(int j=0;j<n;j++)",
    [
     "O(log n)",
     "O(n)",
     "O(n log n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which complexity class is commonly associated with algorithms that repeatedly halve the search space?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    1
   ],
   [
    "An algorithm creates an additional array of size n. What is its auxiliary space complexity?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which of the following correctly orders complexities from most efficient to least efficient?",
    [
     "O(n²), O(n), O(log n), O(1)",
     "O(1), O(log n), O(n), O(n log n)",
     "O(log n), O(1), O(n), O(n²)",
     "O(n), O(log n), O(1), O(n²)"
    ],
    1
   ]
  ]
 },
 {
  "n": "Simple Sieve",
  "g": 1,
  "q": [
   [
    "What is the primary purpose of the Sieve of Eratosthenes algorithm?",
    [
     "Find GCD",
     "Generate all prime numbers up to a given limit",
     "Sort an array",
     "Find factors of a number"
    ],
    1
   ],
   [
    "The Sieve of Eratosthenes works by repeatedly ________.",
    [
     "Dividing numbers",
     "Marking multiples of prime numbers as non-prime",
     "Swapping adjacent elements",
     "Finding the largest number"
    ],
    1
   ],
   [
    "Which number is the first prime considered in the Simple Sieve?",
    [
     "1",
     "2",
     "3",
     "5"
    ],
    1
   ],
   [
    "Why is the number 1 not considered prime?",
    [
     "It is even",
     "It has only one positive divisor",
     "It is divisible by 2",
     "It is odd"
    ],
    1
   ],
   [
    "In the Simple Sieve, multiples of which numbers are marked?",
    [
     "Only even numbers",
     "Prime numbers",
     "Composite numbers",
     "Odd numbers"
    ],
    1
   ],
   [
    "Up to which value do we need to iterate while marking multiples in the Simple Sieve?",
    [
     "n",
     "n/2",
     "√n",
     "log n"
    ],
    2
   ],
   [
    "In the Simple Sieve, why are multiples marked starting from p² instead of 2p?",
    [
     "To reduce redundant marking",
     "To increase memory usage",
     "To simplify syntax",
     "No specific reason"
    ],
    0
   ],
   [
    "Which data structure is commonly used to implement the Simple Sieve?",
    [
     "Stack",
     "Queue",
     "Boolean Array",
     "Linked List"
    ],
    2
   ],
   [
    "Initially, the sieve array marks all numbers greater than 1 as ________.",
    [
     "Composite",
     "Prime",
     "Negative",
     "Zero"
    ],
    1
   ],
   [
    "After executing the Simple Sieve up to 20, how many prime numbers are obtained?",
    [
     "6",
     "7",
     "8",
     "9"
    ],
    2
   ],
   [
    "Which of the following is not a prime number?",
    [
     "17",
     "23",
     "27",
     "31"
    ],
    2
   ],
   [
    "Which of the following is the correct list of primes up to 10?",
    [
     "2, 3, 5, 7",
     "1, 2, 3, 5",
     "2, 4, 6, 8",
     "3, 5, 7, 9"
    ],
    0
   ],
   [
    "Which of the following is an application of the Simple Sieve?",
    [
     "Matrix Multiplication",
     "Prime Number Generation",
     "Graph Traversal",
     "Binary Search"
    ],
    1
   ],
   [
    "Which statement about prime numbers is TRUE?",
    [
     "Every odd number is prime",
     "Every prime number is odd",
     "2 is the only even prime number",
     "1 is a prime number"
    ],
    2
   ],
   [
    "Which variable usually represents the current prime while implementing the sieve?",
    [
     "i",
     "p",
     "n",
     "j"
    ],
    1
   ],
   [
    "If isPrime[15] is false after executing the sieve, what does it indicate?",
    [
     "15 is prime",
     "15 is composite",
     "15 is even",
     "15 was not processed"
    ],
    1
   ],
   [
    "Which of the following numbers remains unmarked after completing the sieve up to 30?",
    [
     "21",
     "25",
     "29",
     "27"
    ],
    2
   ],
   [
    "What is the time complexity of the Sieve of Eratosthenes?",
    [
     "O(n²)",
     "O(n log n)",
     "O(n log log n)",
     "O(log n)"
    ],
    2
   ],
   [
    "What is the space complexity of the Simple Sieve?",
    [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    2
   ],
   [
    "Why is the Sieve of Eratosthenes preferred over checking primality for every number individually?",
    [
     "It generates all primes efficiently",
     "It uses recursion",
     "It sorts the numbers",
     "It requires no extra memory"
    ],
    0
   ]
  ]
 },
 {
  "n": "Segmented & Incremental Sieve",
  "g": 1,
  "q": [
   [
    "What is the primary purpose of the Segmented Sieve algorithm?",
    [
     "Sort prime numbers",
     "Find primes in a given range efficiently",
     "Find the largest prime",
     "Count composite numbers"
    ],
    1
   ],
   [
    "Which algorithm is used to generate base primes before applying the Segmented Sieve?",
    [
     "Bubble Sort",
     "Sieve of Eratosthenes",
     "Binary Search",
     "DFS"
    ],
    1
   ],
   [
    "In the Segmented Sieve, base primes are generated up to:",
    [
     "N",
     "√N",
     "N/2",
     "log N"
    ],
    1
   ],
   [
    "Which data structure is commonly used to mark composite numbers in each segment?",
    [
     "Stack",
     "Queue",
     "Boolean Array",
     "Linked List"
    ],
    2
   ],
   [
    "What is the main advantage of the Segmented Sieve over the standard Sieve of Eratosthenes?",
    [
     "Lower time complexity",
     "Uses less memory for large ranges",
     "Finds only odd primes",
     "Does not require arrays"
    ],
    1
   ],
   [
    "Which of the following ranges is best suited for the Segmented Sieve?",
    [
     "1 to 100",
     "1 to 1000",
     "Large intervals such as 1012 to 1012 + 106",
     "1 to 50"
    ],
    2
   ],
   [
    "What is the approximate time complexity of the Segmented Sieve for finding primes in a range?",
    [
     "O(N²)",
     "O(N log N)",
     "O(N log log N)",
     "O(log N)"
    ],
    2
   ],
   [
    "The space complexity of the Segmented Sieve mainly depends on:",
    [
     "Total value of N",
     "Number of segments",
     "Size of the current segment",
     "Number of prime factors"
    ],
    2
   ],
   [
    "What is the purpose of marking multiples of base primes inside each segment?",
    [
     "To identify prime numbers",
     "To remove duplicate primes",
     "To identify composite numbers",
     "To sort numbers"
    ],
    2
   ],
   [
    "Which statement about the Segmented Sieve is TRUE?",
    [
     "It stores all numbers from 2 to N",
     "It processes numbers in smaller blocks",
     "It works only for small numbers",
     "It cannot find primes in intervals"
    ],
    1
   ],
   [
    "What is the Incremental Sieve primarily designed for?",
    [
     "Sorting integers",
     "Generating primes continuously as needed",
     "Finding GCD",
     "Matrix multiplication"
    ],
    1
   ],
   [
    "Which feature distinguishes the Incremental Sieve from the classic Sieve?",
    [
     "It requires all numbers in advance",
     "It generates primes dynamically",
     "It uses recursion only",
     "It stores only even numbers"
    ],
    1
   ],
   [
    "In the Incremental Sieve, numbers are processed:",
    [
     "All at once",
     "One after another as required",
     "Randomly",
     "Only in descending order"
    ],
    1
   ],
   [
    "Which application benefits the most from the Incremental Sieve?",
    [
     "Real-time prime generation",
     "File compression",
     "Image processing",
     "Sorting arrays"
    ],
    0
   ],
   [
    "Which data structure is often used in Incremental Sieve implementations to track future composites?",
    [
     "Hash Map / Dictionary",
     "Stack",
     "Queue",
     "TreeSet only"
    ],
    0
   ],
   [
    "Which of the following is an advantage of the Incremental Sieve?",
    [
     "Requires full memory allocation initially",
     "Generates primes without precomputing a fixed limit",
     "Works only for even numbers",
     "Slower than trial division in every case"
    ],
    1
   ],
   [
    "Which algorithm is more suitable when the upper limit of prime generation is unknown?",
    [
     "Bubble Sort",
     "Standard Sieve",
     "Incremental Sieve",
     "Merge Sort"
    ],
    2
   ],
   [
    "In the Segmented Sieve, why are base primes reused for every segment?",
    [
     "To reduce repeated computation",
     "To sort the segment",
     "To store duplicate primes",
     "To increase segment size"
    ],
    0
   ],
   [
    "Which of the following statements is TRUE regarding memory usage?",
    [
     "Standard Sieve always uses less memory",
     "Segmented Sieve reduces memory by processing one segment at a time",
     "Incremental Sieve stores every integer forever",
     "Both algorithms require O(N²) memory"
    ],
    1
   ],
   [
    "Which algorithm is generally preferred for finding primes in a very large interval [L, R]?",
    [
     "Trial Division",
     "Incremental Sieve",
     "Segmented Sieve",
     "Linear Search"
    ],
    2
   ]
  ]
 },
 {
  "n": "Euler's phi Algorithm",
  "g": 1,
  "q": [
   [
    "Euler's Totient Function φ(n) represents the number of positive integers that are:",
    [
     "Greater than n",
     "Divisible by n",
     "Less than or equal to n and coprime with n",
     "Prime numbers only"
    ],
    2
   ],
   [
    "What is the value of φ(1)?",
    [
     "0",
     "1",
     "2",
     "Undefined"
    ],
    1
   ],
   [
    "What is the value of φ(7)?",
    [
     "5",
     "6",
     "7",
     "8"
    ],
    1
   ],
   [
    "What is the value of φ(10)?",
    [
     "4",
     "5",
     "6",
     "8"
    ],
    0
   ],
   [
    "If p is a prime number, then φ(p) is equal to:",
    [
     "p",
     "p + 1",
     "p − 1",
     "p²"
    ],
    2
   ],
   [
    "Which formula is used to compute Euler's Totient Function?",
    [
     "φ(n) = n × Σp",
     "φ(n) = n × ∏(1 − 1/p)",
     "φ(n) = n²",
     "φ(n) = n − 2"
    ],
    1
   ],
   [
    "Which mathematical property is essential for Euler's Totient Function?",
    [
     "Divisibility",
     "Coprimality",
     "Sorting",
     "Recursion"
    ],
    1
   ],
   [
    "What is the value of φ(9)?",
    [
     "4",
     "5",
     "6",
     "8"
    ],
    2
   ],
   [
    "Which of the following pairs are coprime?",
    [
     "(8, 12)",
     "(14, 21)",
     "(15, 28)",
     "(16, 24)"
    ],
    2
   ],
   [
    "Euler's Totient Function is widely used in which cryptographic algorithm?",
    [
     "AES",
     "RSA",
     "DES",
     "SHA-256"
    ],
    1
   ],
   [
    "What is the value of φ(13)?",
    [
     "10",
     "11",
     "12",
     "13"
    ],
    2
   ],
   [
    "Which of the following has the maximum value of φ(n)?",
    [
     "Prime Number",
     "Even Composite Number",
     "Perfect Square",
     "Multiple of 6"
    ],
    0
   ],
   [
    "What is the time complexity of the optimized Euler's Phi Algorithm for a single number?",
    [
     "O(n²)",
     "O(log n)",
     "O(√n)",
     "O(n log n)"
    ],
    2
   ],
   [
    "If n = p × q, where p and q are distinct prime numbers, then φ(n) is:",
    [
     "(p + 1)(q + 1)",
     "(p − 1)(q − 1)",
     "p × q",
     "p + q"
    ],
    1
   ],
   [
    "What is the value of φ(15)?",
    [
     "6",
     "7",
     "8",
     "10"
    ],
    2
   ],
   [
    "Which condition is checked while finding the prime factors in the optimized Euler's Phi Algorithm?",
    [
     "i ≤ n",
     "i × i ≤ n",
     "i < n²",
     "i == n"
    ],
    1
   ],
   [
    "Which of the following values is equal to φ(36)?",
    [
     "10",
     "12",
     "16",
     "18"
    ],
    1
   ],
   [
    "Which statement about Euler's Totient Function is TRUE?",
    [
     "φ(n) is always even for n > 2",
     "φ(n) is always odd",
     "φ(n) is always prime",
     "φ(n) = n for every n"
    ],
    0
   ],
   [
    "What is the value of φ(20)?",
    [
     "6",
     "8",
     "10",
     "12"
    ],
    1
   ],
   [
    "Which algorithmic technique is primarily used in the optimized implementation of Euler's Phi Algorithm?",
    [
     "Dynamic Programming",
     "Prime Factorization",
     "Binary Search",
     "Breadth-First Search"
    ],
    1
   ]
  ]
 },
 {
  "n": "Strobogrammatic Number",
  "g": 1,
  "q": [
   [
    "What is a Strobogrammatic Number?",
    [
     "A number divisible by 2",
     "A number that looks the same when rotated 180°",
     "A palindrome number",
     "A prime number"
    ],
    1
   ],
   [
    "Which of the following is a Strobogrammatic Number?",
    [
     "123",
     "69",
     "25",
     "78"
    ],
    1
   ],
   [
    "Which digit remains unchanged after a 180° rotation?",
    [
     "2",
     "5",
     "8",
     "7"
    ],
    2
   ],
   [
    "Which pair of digits maps to each other in a Strobogrammatic Number?",
    [
     "(2, 5)",
     "(6, 9)",
     "(3, 8)",
     "(4, 7)"
    ],
    1
   ],
   [
    "Which of the following digits cannot appear in a Strobogrammatic Number?",
    [
     "0",
     "1",
     "6",
     "2"
    ],
    3
   ],
   [
    "Which of the following is NOT a Strobogrammatic Number?",
    [
     "88",
     "101",
     "619",
     "123"
    ],
    3
   ],
   [
    "Which digits are valid as the middle digit of an odd-length Strobogrammatic Number?",
    [
     "2026-02-05 00:00:00",
     "2026-06-09 00:00:00",
     "2000-01-08 00:00:00",
     "2026-03-07 00:00:00"
    ],
    2
   ],
   [
    "What is the rotated form of the digit 6?",
    [
     "6",
     "8",
     "9",
     "1"
    ],
    2
   ],
   [
    "What is the rotated form of the digit 9?",
    [
     "6",
     "9",
     "8",
     "0"
    ],
    0
   ],
   [
    "Which data structure is commonly used in the two-pointer approach to validate a Strobogrammatic Number?",
    [
     "Queue",
     "Stack",
     "Two Pointers",
     "Heap"
    ],
    2
   ],
   [
    "What is the time complexity of checking whether a number is Strobogrammatic using the two-pointer approach?",
    [
     "O(n²)",
     "O(log n)",
     "O(n)",
     "O(1)"
    ],
    2
   ],
   [
    "What is the auxiliary space complexity of the two-pointer approach?",
    [
     "O(n)",
     "O(log n)",
     "O(1)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which mapping is invalid for a Strobogrammatic Number?",
    [
     "0 ↔ 0",
     "1 ↔ 1",
     "6 ↔ 9",
     "8 ↔ 6"
    ],
    3
   ],
   [
    "Which of the following numbers is Strobogrammatic?",
    [
     "818",
     "128",
     "345",
     "672"
    ],
    0
   ],
   [
    "Which of the following pairs is valid while checking a Strobogrammatic Number?",
    [
     "(1, 6)",
     "(8, 8)",
     "(2, 2)",
     "(5, 5)"
    ],
    1
   ],
   [
    "Which technique is commonly used to compare digits from both ends of the number?",
    [
     "Binary Search",
     "Sliding Window",
     "Two Pointers",
     "Dynamic Programming"
    ],
    2
   ],
   [
    "Which of the following numbers is NOT Strobogrammatic?",
    [
     "609",
     "906",
     "818",
     "689"
    ],
    3
   ],
   [
    "A number with an odd number of digits can be Strobogrammatic only if its middle digit is:",
    [
     "2 or 5",
     "6 or 9",
     "0, 1, or 8",
     "Any digit"
    ],
    2
   ],
   [
    "Which of the following statements about Strobogrammatic Numbers is TRUE?",
    [
     "Every palindrome is Strobogrammatic",
     "Every Strobogrammatic Number is prime",
     "Digits are validated using rotation mappings",
     "They contain only even digits"
    ],
    2
   ],
   [
    "Which of the following mappings is used while validating a Strobogrammatic Number?",
    [
     "0→0, 1→1, 6→9, 8→8, 9→6",
     "0→1, 1→0, 6→6, 9→9",
     "2→5, 5→2, 3→8",
     "1→8, 6→6, 9→9"
    ],
    0
   ]
  ]
 },
 {
  "n": "Remainder Theorem",
  "g": 1,
  "q": [
   [
    "The Chinese Remainder Theorem (CRT) is primarily used to solve which type of mathematical problem?",
    [
     "Polynomial factorization",
     "Systems of linear congruences",
     "Matrix multiplication",
     "Prime factorization"
    ],
    1
   ],
   [
    "According to the Chinese Remainder Theorem, a unique solution exists only when the moduli are:",
    [
     "Even numbers",
     "Prime numbers only",
     "Pairwise coprime",
     "Consecutive integers"
    ],
    2
   ],
   [
    "In the congruence x ≡ 3 mod 7, what does the value 3 represent?",
    [
     "Quotient",
     "Dividend",
     "Remainder",
     "Divisor"
    ],
    2
   ],
   [
    "In the brute-force Java implementation of CRT, the variable x is initialized to 1 because:",
    [
     "The answer is always 1",
     "The algorithm checks every positive integer until a valid solution is found",
     "Zero is not allowed in modular arithmetic",
     "It reduces the time complexity"
    ],
    1
   ],
   [
    "In the brute-force approach, the algorithm terminates when:",
    [
     "The largest modulus is reached",
     "Every congruence relation is satisfied by the current value of x",
     "x becomes equal to the product of moduli",
     "The first remainder matches"
    ],
    1
   ],
   [
    "Consider the congruences: x ≡ 1 mod 5 and x ≡ 3 mod 7. What is the smallest positive value of x?",
    [
     "17",
     "24",
     "31",
     "36"
    ],
    2
   ],
   [
    "In the optimized CRT algorithm, the value M is calculated as:",
    [
     "Sum of all moduli",
     "Product of all moduli",
     "Largest modulus",
     "Least Common Multiple of all remainders"
    ],
    1
   ],
   [
    "If the moduli are {2, 5, 7}, what is the value of M?",
    [
     "35",
     "70",
     "14",
     "10"
    ],
    1
   ],
   [
    "In the optimized CRT algorithm, Mᵢ is computed as:",
    [
     "M × mᵢ",
     "M + mᵢ",
     "M / mᵢ",
     "mᵢ / M"
    ],
    2
   ],
   [
    "If M = 70 and m₂ = 5, what is the value of M₂?",
    [
     "10",
     "14",
     "35",
     "70"
    ],
    1
   ],
   [
    "What is the purpose of finding the modular inverse in the Chinese Remainder Theorem?",
    [
     "To find the largest modulus",
     "To satisfy Mᵢ × Mᵢ⁻¹ ≡ 1 (mod mᵢ)",
     "To reduce the product M",
     "To calculate the quotient"
    ],
    1
   ],
   [
    "For M₂ = 14 and m₂ = 5, which value is the modular inverse of 14 modulo 5?",
    [
     "2",
     "3",
     "4",
     "5"
    ],
    2
   ],
   [
    "According to the PPT example, what is the smallest positive solution for m=[3,4,5] and a=[2,3,1]?",
    [
     "9",
     "10",
     "11",
     "12"
    ],
    2
   ],
   [
    "Which formula is used in the optimized Chinese Remainder Theorem implementation?",
    [
     "X = Σ aᵢ + mᵢ",
     "X = (Σ aᵢ × Mᵢ × Mᵢ⁻¹) mod M",
     "X = M + aᵢ",
     "X = Mᵢ + aᵢ"
    ],
    1
   ],
   [
    "Which algorithm is used in the optimized Java implementation to compute the modular inverse efficiently?",
    [
     "Binary Search",
     "Extended Euclidean Algorithm",
     "Merge Sort",
     "Floyd's Algorithm"
    ],
    1
   ],
   [
    "According to the PPT, what is the time complexity of the optimized CRT implementation using the Extended Euclidean Algorithm?",
    [
     "O(N²)",
     "O(log N)",
     "O(N × log M)",
     "O(M²)"
    ],
    2
   ],
   [
    "According to the PPT, what is the space complexity of the optimized CRT algorithm?",
    [
     "O(1)",
     "O(log N)",
     "O(N)",
     "O(N²)"
    ],
    2
   ],
   [
    "In the Amazon placement problem discussed in the PPT, the warehouses dispatch packages after fixed intervals. Which algorithm is best suited to determine the earliest common dispatch time?",
    [
     "Dijkstra's Algorithm",
     "Chinese Remainder Theorem",
     "Prim's Algorithm",
     "Kadane's Algorithm"
    ],
    1
   ],
   [
    "In the Microsoft placement problem, servers perform health checks periodically. The earliest common health check time is computed using:",
    [
     "Dynamic Programming",
     "Chinese Remainder Theorem",
     "Depth First Search",
     "Bellman-Ford Algorithm"
    ],
    1
   ],
   [
    "Which condition must be verified before applying the Chinese Remainder Theorem in real-world scheduling problems?",
    [
     "All remainders are equal",
     "The moduli are pairwise coprime",
     "All moduli are prime numbers",
     "The product of moduli is even"
    ],
    1
   ]
  ]
 },
 {
  "n": "Toggle the switch & Alice Apple tree",
  "g": 1,
  "q": [
   [
    "In the Toggle the Switch problem, what operation is performed on a selected switch?",
    [
     "It is deleted",
     "Its state changes from ON to OFF or OFF to ON",
     "It is duplicated",
     "Its value becomes 0"
    ],
    1
   ],
   [
    "A switch is initially OFF. After being toggled 7 times, its final state is:",
    [
     "ON",
     "OFF",
     "Undefined",
     "Cannot be determined"
    ],
    0
   ],
   [
    "A switch is initially ON. After being toggled 10 times, its final state is:",
    [
     "OFF",
     "ON",
     "Undefined",
     "Random"
    ],
    0
   ],
   [
    "Which mathematical property determines the final state of a switch after multiple toggles?",
    [
     "Prime numbers",
     "Odd or Even number of toggles",
     "Greatest Common Divisor",
     "Binary Search"
    ],
    1
   ],
   [
    "In the classic Toggle the Switch problem with N switches, which switches remain ON after all passes?",
    [
     "Prime-numbered switches",
     "Odd-numbered switches",
     "Perfect-square-numbered switches",
     "Even-numbered switches"
    ],
    2
   ],
   [
    "Why do only perfect-square switches remain ON?",
    [
     "They have an odd number of divisors",
     "They are divisible only by themselves",
     "They are prime",
     "They have an even number of divisors"
    ],
    0
   ],
   [
    "Which algorithmic technique is most suitable for solving the Toggle the Switch problem efficiently?",
    [
     "Dynamic Programming",
     "Mathematical Observation",
     "Binary Search",
     "Greedy Algorithm"
    ],
    1
   ],
   [
    "How many switches remain ON after completing the toggling process for 100 switches?",
    [
     "9",
     "10",
     "11",
     "12"
    ],
    1
   ],
   [
    "What is the time complexity of the optimized Toggle the Switch solution?",
    [
     "O(N²)",
     "O(N)",
     "O(√N)",
     "O(log N)"
    ],
    2
   ],
   [
    "Which of the following switch numbers will remain ON after all passes?",
    [
     "18",
     "25",
     "30",
     "42"
    ],
    1
   ],
   [
    "The Alice Apple Tree problem primarily involves which mathematical concept?",
    [
     "Prime Numbers",
     "Square Numbers",
     "Cubes",
     "Factorials"
    ],
    1
   ],
   [
    "What is the objective of the Alice Apple Tree problem?",
    [
     "Find the maximum apples",
     "Determine the minimum tree level satisfying a required number of apples",
     "Count prime numbers",
     "Sort apples"
    ],
    1
   ],
   [
    "Which algorithmic technique is commonly used to optimize the Alice Apple Tree problem?",
    [
     "Binary Search",
     "Linear Search",
     "Breadth-First Search",
     "DFS"
    ],
    0
   ],
   [
    "Why is Binary Search applicable in the Alice Apple Tree problem?",
    [
     "The answer space is sorted (monotonic)",
     "The tree is balanced",
     "Apples are prime",
     "The input is always sorted"
    ],
    0
   ],
   [
    "Which condition is repeatedly checked during Binary Search in the Alice Apple Tree problem?",
    [
     "Whether the current level provides at least the required number of apples",
     "Whether the tree height is even",
     "Whether the level is prime",
     "Whether the apples are sorted"
    ],
    0
   ],
   [
    "Which complexity is typically achieved using Binary Search for the Alice Apple Tree problem?",
    [
     "O(N²)",
     "O(N)",
     "O(log N)",
     "O(√N)"
    ],
    2
   ],
   [
    "If the computed number of apples is less than the required value, Binary Search should:",
    [
     "Move to a smaller level",
     "Move to a larger level",
     "Stop immediately",
     "Return -1"
    ],
    1
   ],
   [
    "Which property makes Binary Search valid for this problem?",
    [
     "Random values",
     "Monotonic increase in the number of apples with tree level",
     "Prime levels",
     "Even heights only"
    ],
    1
   ],
   [
    "What is the main goal of the Binary Search solution?",
    [
     "Find any valid level",
     "Find the minimum valid level",
     "Find the maximum valid level",
     "Find the average level"
    ],
    1
   ],
   [
    "Which approach is less efficient than Binary Search for solving the Alice Apple Tree problem?",
    [
     "Linear Search",
     "Divide and Conquer",
     "Binary Search",
     "Mathematical Optimization"
    ],
    0
   ]
  ]
 },
 {
  "n": "Binary Palindrome",
  "g": 1,
  "q": [
   [
    "What is a Binary Palindrome?",
    [
     "A binary number containing only 1s",
     "A binary number that reads the same forwards and backwards",
     "A binary number with an even number of bits",
     "A binary number divisible by 2"
    ],
    1
   ],
   [
    "Which of the following decimal numbers has a binary representation that is a palindrome?",
    [
     "9",
     "10",
     "12",
     "14"
    ],
    0
   ],
   [
    "What is the binary representation of decimal 9?",
    [
     "1000",
     "1001",
     "1010",
     "1100"
    ],
    1
   ],
   [
    "Which of the following binary numbers is NOT a palindrome?",
    [
     "101",
     "111",
     "1001",
     "1010"
    ],
    3
   ],
   [
    "Which technique is commonly used to check whether a binary representation is a palindrome?",
    [
     "Sliding Window",
     "Two Pointers",
     "Binary Search",
     "Merge Sort"
    ],
    1
   ],
   [
    "What is the first step in checking whether an integer is a binary palindrome?",
    [
     "Reverse the decimal number",
     "Convert the integer to its binary representation",
     "Sort the bits",
     "Count the number of 1s"
    ],
    1
   ],
   [
    "Which of the following decimal numbers is NOT a binary palindrome?",
    [
     "5",
     "7",
     "8",
     "15"
    ],
    2
   ],
   [
    "What is the binary representation of decimal 15?",
    [
     "1110",
     "1111",
     "1011",
     "1101"
    ],
    1
   ],
   [
    "Which bitwise operation is commonly used to extract the least significant bit (LSB)?",
    [
     "n << 1",
     "n >> 1",
     "n & 1",
     "n ^ 1"
    ],
    2
   ],
   [
    "Which bitwise operator is used to shift bits to the right?",
    [
     "<<",
     ">>",
     "&",
     "`"
    ],
    1
   ],
   [
    "What is the time complexity of checking a binary palindrome by comparing bits from both ends?",
    [
     "O(n²)",
     "O(log n)",
     "O(n)",
     "O(1)"
    ],
    1
   ],
   [
    "What is the auxiliary space complexity when checking a binary palindrome using only bit manipulation?",
    [
     "O(n)",
     "O(log n)",
     "O(1)",
     "O(n²)"
    ],
    2
   ],
   [
    "Which of the following decimal numbers is a binary palindrome?",
    [
     "17",
     "18",
     "19",
     "20"
    ],
    0
   ],
   [
    "Which property is true for every binary palindrome?",
    [
     "The first and last bits are identical",
     "It always contains an even number of bits",
     "It always ends with 0",
     "It is always divisible by 2"
    ],
    0
   ],
   [
    "Which decimal number has the binary representation 101101?",
    [
     "43",
     "45",
     "44",
     "46"
    ],
    1
   ],
   [
    "Which of the following binary strings is a palindrome?",
    [
     "11001",
     "101101",
     "100101",
     "110101"
    ],
    1
   ],
   [
    "Which bitwise operation is typically used to remove the least significant bit after processing it?",
    [
     "n << 1",
     "n >> 1",
     "n & 1",
     "`n"
    ],
    1
   ],
   [
    "Which algorithmic approach avoids converting the number into a binary string?",
    [
     "Dynamic Programming",
     "Bit Manipulation",
     "Breadth-First Search",
     "Binary Search"
    ],
    1
   ],
   [
    "Which of the following decimal numbers has a binary representation 11011?",
    [
     "25",
     "26",
     "27",
     "28"
    ],
    2
   ],
   [
    "Which approach is generally the most space-efficient for checking whether a number is a binary palindrome?",
    [
     "Convert to String and Compare",
     "Use Character Array",
     "Bit Manipulation with Two-Pointer Logic",
     "Store Bits in a Linked List"
    ],
    2
   ]
  ]
 },
 {
  "n": "Booth's Algorithm",
  "g": 2,
  "q": [
   [
    "Booth's algorithm is used for",
    [
     "Addition of unsigned numbers",
     "Multiplication of signed binary numbers",
     "Division of binary numbers",
     "Finding GCD"
    ],
    1
   ],
   [
    "Booth's algorithm represents numbers in",
    [
     "Sign-magnitude form",
     "1's complement",
     "2's complement",
     "Excess-3 code"
    ],
    2
   ],
   [
    "The two bits examined at each step are",
    [
     "Qn and Qn+1",
     "Qn and Qn-1",
     "An and Qn",
     "Cn and Qn"
    ],
    0
   ],
   [
    "If the bit pair is \"00\", the operation is",
    [
     "A=A+M, then ASR",
     "A=A-M, then ASR",
     "No arithmetic op, only ASR",
     "No operation at all"
    ],
    2
   ],
   [
    "If the bit pair is \"11\", the operation is",
    [
     "A=A+M, then ASR",
     "No arithmetic op, only ASR",
     "A=A-M, then ASR",
     "Halt"
    ],
    1
   ],
   [
    "If the bit pair is \"01\", the operation is",
    [
     "A=A-M, then ASR",
     "A=A+M, then ASR",
     "No operation",
     "A=2A"
    ],
    1
   ],
   [
    "If the bit pair is \"10\", the operation is",
    [
     "A=A+M, then ASR",
     "A=A-M, then ASR",
     "No operation",
     "A=A/2"
    ],
    1
   ],
   [
    "ASR stands for",
    [
     "Automatic Shift Register",
     "Arithmetic Shift Right",
     "Add Subtract Register",
     "Arithmetic Sign Reverse"
    ],
    1
   ],
   [
    "Booth's algorithm reduces the number of",
    [
     "Registers needed",
     "Add/subtract ops for consecutive 1s",
     "Bits in multiplicand",
     "Clock cycles to 1"
    ],
    1
   ],
   [
    "For n-bit operands, iterations required (basic version)",
    [
     "n/2",
     "n",
     "2n",
     "n-1"
    ],
    1
   ],
   [
    "Booth's algorithm is most efficient when the multiplier has",
    [
     "Alternating 0s and 1s",
     "Long runs of 1s or 0s",
     "All bits equal to 1",
     "An odd number of bits"
    ],
    1
   ],
   [
    "The extra bit Qn+1 is initialized to",
    [
     "1",
     "0",
     "Sign bit of multiplicand",
     "Undefined"
    ],
    1
   ],
   [
    "Booth's algorithm can correctly multiply",
    [
     "Only positive numbers",
     "Only negative numbers",
     "Both positive and negative",
     "Only even numbers"
    ],
    2
   ],
   [
    "Registers A, Q, M represent",
    [
     "Accumulator, Multiplier, Multiplicand",
     "Adder, Quotient, Modulus",
     "Accumulator, Quotient reg, Memory addr",
     "Array, Queue, Matrix"
    ],
    0
   ],
   [
    "Worst case (most operations) occurs with pattern",
    [
     "000...000",
     "111...111",
     "010101...01",
     "100000...00"
    ],
    2
   ],
   [
    "Booth's algorithm is primarily used for which operation?",
    [
     "Binary division",
     "Signed binary multiplication",
     "Sorting",
     "Binary search"
    ],
    1
   ],
   [
    "In Booth's algorithm, the extra bit Q-1 is initially set to:",
    [
     "1",
     "-1",
     "0",
     "MSB of Q"
    ],
    2
   ],
   [
    "If the pair (Q0,Q-1) is 01, Booth's algorithm performs:",
    [
     "A = A + M",
     "A = A - M",
     "Arithmetic right shift only",
     "No operation"
    ],
    0
   ],
   [
    "If the pair (Q0,Q-1) is 10, Booth's algorithm performs:",
    [
     "A = A + M",
     "A = A - M",
     "Logical left shift",
     "No operation"
    ],
    1
   ],
   [
    "For pair 00 in Booth's algorithm, the action before shifting is:",
    [
     "A = A + M",
     "A = A - M",
     "No arithmetic operation",
     "A = 0"
    ],
    2
   ],
   [
    "For pair 11 in Booth's algorithm, the action before shifting is:",
    [
     "A = A + M",
     "A = A - M",
     "No arithmetic operation",
     "A = M"
    ],
    2
   ],
   [
    "Which shift is used after each Booth operation?",
    [
     "Logical left shift",
     "Arithmetic right shift",
     "Logical right shift",
     "Circular shift"
    ],
    1
   ],
   [
    "The arithmetic right shift in Booth's algorithm preserves the:",
    [
     "LSB of A",
     "Sign bit",
     "Q-1 bit only",
     "Carry bit"
    ],
    1
   ],
   [
    "For n-bit operands, the basic Booth algorithm generally requires how many iterations?",
    [
     "n",
     "n-1",
     "2n",
     "log n"
    ],
    0
   ],
   [
    "Booth's algorithm is especially useful because it efficiently handles:",
    [
     "Only positive numbers",
     "Signed numbers and runs of 1s",
     "Only decimal numbers",
     "Floating-point numbers"
    ],
    1
   ],
   [
    "For multiplying 5 × 3 using signed binary representation, the decimal result is:",
    [
     "8",
     "15",
     "10",
     "12"
    ],
    1
   ],
   [
    "In Booth's algorithm, M represents the:",
    [
     "Multiplier",
     "Multiplicand",
     "Accumulator",
     "Quotient"
    ],
    1
   ],
   [
    "In Booth's algorithm, Q represents the:",
    [
     "Multiplier",
     "Multiplicand",
     "Product",
     "Sign bit"
    ],
    0
   ],
   [
    "The accumulator A is initially:",
    [
     "M",
     "Q",
     "0",
     "1"
    ],
    2
   ],
   [
    "A common advantage of Booth's algorithm is reduction of additions when the multiplier contains:",
    [
     "Alternating zeros only",
     "Long consecutive runs of 1s",
     "No bits",
     "Only negative bits"
    ],
    1
   ],
   [
    "If Q0Q-1 = 01, the transition is interpreted as:",
    [
     "Start of a run of 1s",
     "End of a run of 1s",
     "Two zeros",
     "Invalid state"
    ],
    0
   ],
   [
    "If Q0Q-1 = 10, the transition is interpreted as:",
    [
     "Start of a run of 1s",
     "End of a run of 1s",
     "Two ones",
     "No transition"
    ],
    1
   ]
  ]
 },
 {
  "n": "Euclid's Algorithm",
  "g": 2,
  "q": [
   [
    "Euclid's algorithm is used to find",
    [
     "LCM of two numbers",
     "GCD of two numbers",
     "Prime factors",
     "Square root"
    ],
    1
   ],
   [
    "gcd(a, b) equals",
    [
     "gcd(a+b, b)",
     "gcd(b, a mod b)",
     "gcd(a*b, 1)",
     "gcd(a-1, b-1)"
    ],
    1
   ],
   [
    "The algorithm terminates when",
    [
     "a equals b",
     "b becomes 0",
     "a becomes negative",
     "a equals 1"
    ],
    1
   ],
   [
    "Time complexity for a, b (a>b) is",
    [
     "O(a+b)",
     "O(log(min(a,b)))",
     "O(a*b)",
     "O(a/b)"
    ],
    1
   ],
   [
    "Extended Euclidean algorithm additionally computes",
    [
     "LCM only",
     "x, y such that ax+by=gcd(a,b)",
     "Prime factorization",
     "Modular exponent"
    ],
    1
   ],
   [
    "gcd(0, n) equals",
    [
     "0",
     "n",
     "1",
     "undefined"
    ],
    1
   ],
   [
    "Worst-case (most steps) input pair is",
    [
     "Powers of 2",
     "Consecutive Fibonacci numbers",
     "Consecutive primes",
     "Perfect squares"
    ],
    1
   ],
   [
    "gcd(48, 18) equals",
    [
     "3",
     "6",
     "9",
     "12"
    ],
    1
   ],
   [
    "Recursive base case is",
    [
     "gcd(a, 0) = a",
     "gcd(0, 0) = 1",
     "gcd(a, 1) = a",
     "gcd(a, a) = 0"
    ],
    0
   ],
   [
    "LCM(a,b) can be found using",
    [
     "abgcd(a,b)",
     "(a*b)/gcd(a,b)",
     "a+b-gcd(a,b)",
     "gcd(a,b)/(a*b)"
    ],
    1
   ],
   [
    "Euclid's algorithm works correctly for",
    [
     "Only positive integers",
     "Non-negative integers",
     "Only prime numbers",
     "Only even numbers"
    ],
    1
   ],
   [
    "Steps bounded (Lamé's theorem) by approx.",
    [
     "5x digits of smaller number",
     "Value of larger number",
     "Sum of both numbers",
     "Fixed constant of 10"
    ],
    0
   ],
   [
    "Binary GCD (Stein's) algorithm avoids",
    [
     "Floating point division",
     "Division/modulo, uses shifts",
     "Finding LCM directly",
     "Working with primes"
    ],
    1
   ],
   [
    "gcd(0, 0) is generally defined as",
    [
     "1",
     "0",
     "Undefined only",
     "Infinity"
    ],
    1
   ],
   [
    "gcd(1071, 462) equals",
    [
     "21",
     "33",
     "7",
     "42"
    ],
    0
   ],
   [
    "Euclid's algorithm finds the:",
    [
     "LCM only",
     "GCD",
     "Prime factorization only",
     "Median"
    ],
    1
   ],
   [
    "The key recurrence is:",
    [
     "gcd(a,b)=gcd(b,a%b)",
     "gcd(a,b)=a+b",
     "gcd(a,b)=a*b",
     "gcd(a,b)=a/b"
    ],
    0
   ],
   [
    "What is gcd(56,98)?",
    [
     "7",
     "14",
     "28",
     "42"
    ],
    1
   ],
   [
    "What is gcd(48,18)?",
    [
     "3",
     "6",
     "12",
     "18"
    ],
    1
   ],
   [
    "What is gcd(17,5)?",
    [
     "1",
     "2",
     "5",
     "17"
    ],
    0
   ],
   [
    "The algorithm terminates when the second value becomes:",
    [
     "-1",
     "0",
     "1 always",
     "The larger value"
    ],
    1
   ],
   [
    "If gcd(a,0) is evaluated for positive a, the result is:",
    [
     "0",
     "1",
     "a",
     "Undefined"
    ],
    2
   ],
   [
    "For gcd(270,192), the first remainder is:",
    [
     "6",
     "18",
     "78",
     "192"
    ],
    2
   ],
   [
    "Which operation is central to Euclid's iterative method?",
    [
     "Multiplication",
     "Modulo",
     "Exponentiation",
     "Sorting"
    ],
    1
   ],
   [
    "The time complexity of Euclid's algorithm is commonly expressed as:",
    [
     "O(n) in the numeric value",
     "O(log min(a,b))",
     "O(n²)",
     "O(2ⁿ)"
    ],
    1
   ],
   [
    "Which pair is coprime?",
    [
     "12,18",
     "14,21",
     "15,28",
     "24,36"
    ],
    2
   ],
   [
    "LCM(a,b) can be computed using GCD as:",
    [
     "a+b-gcd",
     "a*b/gcd",
     "a/gcd+b",
     "gcd/(a*b)"
    ],
    1
   ],
   [
    "If a=84 and b=30, after one modulo step b becomes:",
    [
     "24",
     "30",
     "54",
     "14"
    ],
    0
   ],
   [
    "A recursive Euclid implementation should normally call:",
    [
     "gcd(b, a%b)",
     "gcd(a%b,a%b)",
     "gcd(a+b,b)",
     "gcd(a/b,b)"
    ],
    0
   ],
   [
    "What happens if a=0 and b=0 in the usual integer GCD definition?",
    [
     "Result is 1",
     "Result is 0 by convention",
     "Always 2",
     "Modulo error before entry"
    ],
    1
   ],
   [
    "Which input pair gives GCD 9?",
    [
     "27,36",
     "18,27",
     "20,27",
     "45,64"
    ],
    1,
    "Both 27, 36 and 18, 27 have GCD 9. The PDF key lists B."
   ],
   [
    "For gcd(101,10), the first remainder is:",
    [
     "0",
     "1",
     "9",
     "10"
    ],
    1,
    "101 mod 10 = 1, so B is correct. The PDF key lists C."
   ]
  ]
 },
 {
  "n": "Karatsuba Algorithm",
  "g": 2,
  "q": [
   [
    "Karatsuba algorithm is used for fast",
    [
     "Sorting",
     "Multiplication of large numbers",
     "Searching",
     "Division"
    ],
    1
   ],
   [
    "Reduces n-digit multiplication to how many n/2-digit multiplications",
    [
     "4",
     "3",
     "2",
     "1"
    ],
    1
   ],
   [
    "Time complexity of Karatsuba algorithm",
    [
     "O(n^2)",
     "O(n log n)",
     "O(n^1.585)",
     "O(n)"
    ],
    2
   ],
   [
    "Karatsuba follows which paradigm",
    [
     "Greedy",
     "Divide and conquer",
     "Dynamic programming",
     "Backtracking"
    ],
    1
   ],
   [
    "Schoolbook multiplication complexity",
    [
     "O(n)",
     "O(n log n)",
     "O(n^2)",
     "O(n^1.585)"
    ],
    2
   ],
   [
    "One of the three products computed is",
    [
     "a·b only",
     "(a+b)·(c+d)",
     "a/c",
     "a−b"
    ],
    1
   ],
   [
    "1.585 is approximately",
    [
     "log2(3)",
     "log3(2)",
     "log10(2)",
     "log2(5)"
    ],
    0
   ],
   [
    "Karatsuba was historically significant because it",
    [
     "Proved O(n^2) is optimal",
     "First to beat O(n^2) for multiplication",
     "Solved sorting in linear time",
     "Introduced recursion"
    ],
    1
   ],
   [
    "The middle term is computed as",
    [
     "ac + bd",
     "(a+b)(c+d) − ac − bd",
     "ad − bc",
     "ac − bd"
    ],
    1
   ],
   [
    "Karatsuba multiplication is most beneficial for",
    [
     "Very small numbers",
     "Very large numbers",
     "Only prime numbers",
     "Floating point numbers only"
    ],
    1
   ],
   [
    "Recurrence relation is",
    [
     "T(n)=4T(n/2)+O(n)",
     "T(n)=3T(n/2)+O(n)",
     "T(n)=2T(n/2)+O(n)",
     "T(n)=T(n/2)+O(1)"
    ],
    1
   ],
   [
    "Discovered by Anatoly Karatsuba in",
    [
     "1960",
     "1990",
     "1900",
     "1850"
    ],
    0
   ],
   [
    "Compared to FFT-based (Schönhage–Strassen) multiplication, Karatsuba is",
    [
     "Always faster",
     "Faster for moderate sizes, slower for huge ones",
     "Never used in practice",
     "Purely theoretical"
    ],
    1
   ],
   [
    "Generalizing Karatsuba's splits leads to",
    [
     "Bubble sort",
     "Toom–Cook multiplication",
     "Prim's algorithm",
     "Quick sort"
    ],
    1
   ],
   [
    "Base case typically falls back to",
    [
     "Infinite recursion",
     "Simple schoolbook multiplication",
     "Division",
     "Bit shifting only"
    ],
    1
   ],
   [
    "Karatsuba is an algorithm for fast:",
    [
     "Sorting",
     "Integer multiplication",
     "Graph traversal",
     "Searching"
    ],
    1
   ],
   [
    "Karatsuba reduces the number of recursive multiplications from 4 to:",
    [
     "1",
     "2",
     "3",
     "5"
    ],
    2
   ],
   [
    "For x=x1*B+x0 and y=y1*B+y0, xy contains the term:",
    [
     "x1y1*B²",
     "x0y0/B",
     "x1+x0",
     "y1-y0"
    ],
    0
   ],
   [
    "The middle product in Karatsuba is obtained using:",
    [
     "z1 = (x1+x0)(y1+y0)-z2-z0",
     "z1=x1y1+x0y0",
     "z1=x1-x0",
     "z1=z2*z0"
    ],
    0
   ],
   [
    "Karatsuba's recurrence is approximately:",
    [
     "T(n)=2T(n/2)+O(n)",
     "T(n)=4T(n/2)+O(n)",
     "T(n)=T(n-1)+O(1)",
     "T(n)=nT(n)"
    ],
    0,
    "Strictly, Karatsuba is T(n) = 3T(n/2) + O(n). None of the listed options says so; the PDF key lists A."
   ],
   [
    "The asymptotic time complexity of Karatsuba multiplication is:",
    [
     "O(n²)",
     "O(n^1.585) approximately",
     "O(log n)",
     "O(n log n)"
    ],
    1
   ],
   [
    "The base B in a split is often chosen as:",
    [
     "10^m or 2^m",
     "Always 1",
     "Always n",
     "A prime only"
    ],
    0
   ],
   [
    "If x=12 and y=10, their product is:",
    [
     "120",
     "110",
     "22",
     "100"
    ],
    0
   ],
   [
    "In binary strings, leading zeros can generally be:",
    [
     "Never removed",
     "Removed without changing value",
     "Converted to ones",
     "Used as decimal digits"
    ],
    1
   ],
   [
    "A major source of bugs in Java Karatsuba implementations is:",
    [
     "Using recursion",
     "Integer overflow",
     "Using multiplication",
     "Using variables"
    ],
    1
   ],
   [
    "For x=1100₂ and y=1010₂, the decimal product is:",
    [
     "120",
     "110",
     "100",
     "130"
    ],
    0
   ],
   [
    "1100₂ represents:",
    [
     "10",
     "12",
     "14",
     "16"
    ],
    1
   ],
   [
    "1010₂ represents:",
    [
     "8",
     "10",
     "12",
     "14"
    ],
    1
   ],
   [
    "Karatsuba is usually beneficial for:",
    [
     "Very small fixed-width values only",
     "Large integer multiplication",
     "Checking palindrome strings",
     "Finding GCD"
    ],
    1
   ],
   [
    "The three recursive products are commonly named:",
    [
     "z0,z1,z2",
     "a,b,c",
     "p,q,r,s",
     "m,n"
    ],
    0
   ],
   [
    "The final recombination is:",
    [
     "z2B²+z1B+z0",
     "z0B²+z1B+z2",
     "z2+z1+z0",
     "z2B+z1B²+z0"
    ],
    0
   ],
   [
    "If the split size is m digits, B is:",
    [
     "10^m for decimal representation",
     "m²",
     "2m",
     "m/2"
    ],
    0
   ]
  ]
 },
 {
  "n": "Longest Sequence of 1s After Flipping a Bit",
  "g": 2,
  "q": [
   [
    "This problem finds longest 1s sequence by",
    [
     "Flipping any one 0 to 1",
     "Sorting the array",
     "Reversing the array",
     "Removing any element"
    ],
    0
   ],
   [
    "Common efficient approach",
    [
     "Brute force each flip",
     "Sliding window / two-pointer",
     "Binary search",
     "Recursion with memoization only"
    ],
    1
   ],
   [
    "Time complexity of optimal solution",
    [
     "O(n^2)",
     "O(n)",
     "O(n log n)",
     "O(2^n)"
    ],
    1
   ],
   [
    "If array is all 1s, the answer is",
    [
     "0",
     "Length of array",
     "Length − 1",
     "1"
    ],
    1
   ],
   [
    "With two+ zeros, max sequence bounded by",
    [
     "The two nearest zeros",
     "Start and end of array",
     "Any two 1s",
     "Random points"
    ],
    0
   ],
   [
    "This is a special case of",
    [
     "Longest substring w/o repeats",
     "Max Consecutive Ones with k=1 flip",
     "Two Sum problem",
     "Longest palindromic substring"
    ],
    1
   ],
   [
    "For [1,0,1,1,0,1], max length after one flip",
    [
     "3",
     "4",
     "5",
     "6"
    ],
    1
   ],
   [
    "When zero-count in window exceeds k, we",
    [
     "Reset window to empty",
     "Shrink window from the left",
     "Stop the algorithm",
     "Expand window further"
    ],
    1
   ],
   [
    "Space complexity of optimal solution",
    [
     "O(n)",
     "O(1)",
     "O(n^2)",
     "O(log n)"
    ],
    1
   ],
   [
    "All-zero array, flip one bit, max run becomes",
    [
     "0",
     "1",
     "n",
     "n−1"
    ],
    1
   ],
   [
    "All-zero array of length n, flip one bit, longest run",
    [
     "n",
     "1",
     "n−1",
     "0"
    ],
    1
   ],
   [
    "NOT typically needed for this problem",
    [
     "Two pointers",
     "Sliding window",
     "Priority queue",
     "Simple counters"
    ],
    2
   ],
   [
    "For [1,1,0,1,1,0,1,1,1,1,0,1,1], k=1, result",
    [
     "4",
     "5",
     "6",
     "8"
    ],
    2,
    "Flipping the zero at index 5 or 10 gives a run of 7, which is not among the options. The sheet key lists C (6)."
   ],
   [
    "Generalizes to k flips by adjusting",
    [
     "Window shrink condition (zeros>k)",
     "Array size",
     "Output format",
     "Data type used"
    ],
    0
   ],
   [
    "Key invariant maintained",
    [
     "Window has exactly one 1",
     "Window has at most k zeros",
     "Window length is fixed",
     "Window always starts at index 0"
    ],
    1
   ],
   [
    "The task permits flipping how many bits?",
    [
     "Zero",
     "Exactly one",
     "Two",
     "Any number"
    ],
    1
   ],
   [
    "For input 1775, the longest sequence after one bit flip is commonly:",
    [
     "6",
     "7",
     "8",
     "9"
    ],
    2
   ],
   [
    "1775 in binary is:",
    [
     "11011101111",
     "11011101110",
     "10101010111",
     "11100011111"
    ],
    0
   ],
   [
    "For input 15, the longest sequence after one flip is:",
    [
     "4",
     "5",
     "6",
     "3"
    ],
    1,
    "15 = 1111₂; flipping the 0 just above it gives 11111₂, a run of 5. The PDF key lists A (4)."
   ],
   [
    "A simple solution can inspect each bit and:",
    [
     "Flip it and count consecutive ones",
     "Sort the bits",
     "Compute GCD",
     "Multiply by 2"
    ],
    0
   ],
   [
    "An optimized solution tracks:",
    [
     "Current run and previous run",
     "Only total zeros",
     "Only total ones",
     "Array index only"
    ],
    0
   ],
   [
    "When the current bit is 1, the current run is:",
    [
     "Reset to 0",
     "Incremented",
     "Divided by 2",
     "Negated"
    ],
    1
   ],
   [
    "When a zero is encountered, a one-flip window may combine:",
    [
     "Left and right runs of ones",
     "Only zeros",
     "Two zeros",
     "No runs"
    ],
    0
   ],
   [
    "For an all-ones 32-bit integer, flipping one bit can produce at most:",
    [
     "31",
     "32",
     "33",
     "64"
    ],
    1
   ],
   [
    "For integer 0, flipping one bit can produce a longest run of:",
    [
     "0",
     "1",
     "2",
     "32"
    ],
    1
   ],
   [
    "If a number is represented with a fixed width, the maximum possible run is limited by:",
    [
     "Word width",
     "Prime factors",
     "GCD",
     "Array length only"
    ],
    0
   ],
   [
    "The bitwise expression n & 1 tests the:",
    [
     "MSB",
     "LSB",
     "Middle bit",
     "Sign only"
    ],
    1
   ],
   [
    "The expression n >> 1 generally:",
    [
     "Shifts bits right",
     "Shifts bits left",
     "Flips all bits",
     "Adds one"
    ],
    0
   ],
   [
    "For positive n, repeatedly using n >>= 1 eventually reaches:",
    [
     "-1",
     "0",
     "n",
     "1 always"
    ],
    1
   ],
   [
    "A common edge case is:",
    [
     "All bits are 1",
     "Empty Java class",
     "No variable",
     "Sorting"
    ],
    0
   ],
   [
    "If two blocks of ones have lengths 4 and 3 separated by one zero, one flip can create a run of:",
    [
     "6",
     "7",
     "8",
     "4"
    ],
    2,
    "4 + 1 (the flipped zero) + 3 = 8, so C is correct. The PDF key lists B."
   ],
   [
    "The problem is fundamentally a:",
    [
     "Bit manipulation problem",
     "Graph problem",
     "String sorting problem",
     "Dynamic SQL problem"
    ],
    0
   ]
  ]
 },
 {
  "n": "Swap Two Nibbles in a Byte",
  "g": 2,
  "q": [
   [
    "A nibble consists of how many bits",
    [
     "2",
     "4",
     "8",
     "16"
    ],
    1
   ],
   [
    "A byte consists of how many nibbles",
    [
     "1",
     "2",
     "4",
     "8"
    ],
    1
   ],
   [
    "Correct expression to swap nibbles of x",
    [
     "((x&0x0F)<<4)|((x&0xF0)>>4)",
     "(x<<4)|(x>>4)",
     "(x&0xFF)<<4",
     "x^0xFF"
    ],
    0
   ],
   [
    "Mask 0x0F isolates",
    [
     "Upper nibble",
     "Lower nibble",
     "Entire byte",
     "Sign bit"
    ],
    1
   ],
   [
    "Mask 0xF0 isolates",
    [
     "Lower nibble",
     "Upper nibble",
     "Whole byte",
     "Nothing, invalid"
    ],
    1
   ],
   [
    "Swapping nibbles of 0x3C gives",
    [
     "0xC3",
     "0x3C",
     "0xCC",
     "0x33"
    ],
    0
   ],
   [
    "Operation to combine shifted nibbles",
    [
     "AND (&)",
     "OR (|)",
     "NOT (~)",
     "Modulo (%)"
    ],
    1
   ],
   [
    "Nibble swap is a special case of",
    [
     "Sorting algorithm",
     "Bit manipulation",
     "Searching algorithm",
     "Recursion"
    ],
    1
   ],
   [
    "Time complexity of nibble swap",
    [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(n^2)"
    ],
    1
   ],
   [
    "Swapping nibbles of 0xAB gives",
    [
     "0xAB",
     "0xBA",
     "0xFF",
     "0x00"
    ],
    1
   ],
   [
    "Which operator moves lower nibble bits to upper position",
    [
     "Right shift (>>)",
     "Left shift (<<)",
     "XOR",
     "Modulo"
    ],
    1
   ],
   [
    "Nibble swapping is commonly used in",
    [
     "Sorting datasets",
     "Data encoding/checksum calculations",
     "Graph traversal",
     "String matching"
    ],
    1
   ],
   [
    "Without final masking to 8 bits, risk is",
    [
     "No issue",
     "Bits leaking beyond byte boundary",
     "Always correct result",
     "Compile-time error"
    ],
    1
   ],
   [
    "Result should be masked with (in C)",
    [
     "0xF0",
     "0xFF",
     "0x0F",
     "0x100"
    ],
    1
   ],
   [
    "Swapping nibbles of 0x00 gives",
    [
     "0xFF",
     "0x00",
     "0x0F",
     "0xF0"
    ],
    1
   ],
   [
    "A nibble contains:",
    [
     "2 bits",
     "4 bits",
     "8 bits",
     "16 bits"
    ],
    1
   ],
   [
    "A byte contains:",
    [
     "4 bits",
     "8 bits",
     "16 bits",
     "32 bits"
    ],
    1
   ],
   [
    "To swap nibbles, the common expression is:",
    [
     "((n&0x0F)<<4)|((n&0xF0)>>4)",
     "n<<8",
     "n&0xFF00",
     "n^0"
    ],
    0
   ],
   [
    "0x0F masks the:",
    [
     "Upper nibble",
     "Lower nibble",
     "Sign bit",
     "Whole byte"
    ],
    1
   ],
   [
    "0xF0 masks the:",
    [
     "Lower nibble",
     "Upper nibble",
     "Two bytes",
     "No bits"
    ],
    1
   ],
   [
    "The left shift used on the lower nibble is:",
    [
     "<<2",
     "<<4",
     "<<8",
     ">>4"
    ],
    1
   ],
   [
    "The upper nibble is moved down using:",
    [
     ">>2",
     ">>4",
     "<<4",
     "<<8"
    ],
    1
   ],
   [
    "171 decimal in hexadecimal is:",
    [
     "0xAB",
     "0xBA",
     "0xAF",
     "0xAA"
    ],
    0
   ],
   [
    "After swapping nibbles of 171, the decimal result is:",
    [
     "170",
     "186",
     "187",
     "171"
    ],
    1
   ],
   [
    "0xF0 after swapping becomes:",
    [
     "0x0F",
     "0xF0",
     "0xFF",
     "0x00"
    ],
    0
   ],
   [
    "0x00 after swapping remains:",
    [
     "0xFF",
     "0x00",
     "0x0F",
     "0xF0"
    ],
    1
   ],
   [
    "Bitwise OR is used to:",
    [
     "Combine the shifted nibbles",
     "Multiply them",
     "Sort them",
     "Compare strings"
    ],
    0
   ],
   [
    "If n=0x12, swapped result is:",
    [
     "0x21",
     "0x12",
     "0x11",
     "0x22"
    ],
    0
   ],
   [
    "The operation is normally performed within:",
    [
     "One byte",
     "One word only",
     "One string",
     "One array"
    ],
    0
   ],
   [
    "For Java signed byte, masking with 0xFF is often useful to:",
    [
     "Treat it as unsigned byte value",
     "Make it negative",
     "Convert to char",
     "Sort it"
    ],
    0
   ],
   [
    "Which is NOT required for the standard nibble swap?",
    [
     "AND mask",
     "Shift",
     "OR",
     "Modulo division"
    ],
    3
   ]
  ]
 },
 {
  "n": "Block Swap Algorithm",
  "g": 2,
  "q": [
   [
    "Block Swap Algorithm is primarily used to",
    [
     "Sort an array",
     "Rotate an array by d positions",
     "Search an element",
     "Reverse a linked list"
    ],
    1
   ],
   [
    "It works by dividing the array into",
    [
     "Three equal parts",
     "Two blocks, then swapping them",
     "n individual elements",
     "Sorted/unsorted halves"
    ],
    1
   ],
   [
    "The algorithm compares",
    [
     "d and n only",
     "Sizes of blocks A(d) and B(n-d), recursively",
     "Values of elements only",
     "Nothing, it's fixed"
    ],
    1
   ],
   [
    "Time complexity for rotation",
    [
     "O(n^2)",
     "O(n)",
     "O(log n)",
     "O(n log n)"
    ],
    1
   ],
   [
    "Space complexity",
    [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(d)"
    ],
    1
   ],
   [
    "If A's size equals B's size, we",
    [
     "Swap A and B directly, done",
     "Recurse on smaller part",
     "Reverse whole array",
     "Return without change"
    ],
    0
   ],
   [
    "If A is smaller than B, the algorithm",
    [
     "Swaps A with leftmost part of B, recurses on rest",
     "Discards A",
     "Swaps A with rightmost part only",
     "Sorts B"
    ],
    0
   ],
   [
    "It is an alternative to which technique",
    [
     "Bubble sort",
     "Reversal Algorithm",
     "Merge sort",
     "Quick sort"
    ],
    1
   ],
   [
    "To left-rotate by d, initial blocks are",
    [
     "arr[0..d-1], arr[d..n-1]",
     "arr[0..n-1], empty",
     "arr[n-d..n-1], arr[0..n-d-1]",
     "Random split"
    ],
    0
   ],
   [
    "Primary repeated subroutine",
    [
     "Merging",
     "Swapping ranges of elements",
     "Partitioning like quicksort",
     "Binary search"
    ],
    1
   ],
   [
    "Compared to Juggling Algorithm, it is",
    [
     "Simpler concept, same time complexity",
     "Always faster",
     "Always slower",
     "Solves unrelated problem"
    ],
    0
   ],
   [
    "It assumes rotation amount d is",
    [
     "Always greater than n",
     "Always ≤ n",
     "Always exactly n/2",
     "Irrelevant"
    ],
    1
   ],
   [
    "Number of recursive swap steps is",
    [
     "Always exactly 1",
     "Proportional to Euclid-like reduction",
     "Always n^2",
     "Always 0"
    ],
    1
   ],
   [
    "Recursive reduction is conceptually similar to",
    [
     "Binary search",
     "Euclid's GCD algorithm",
     "Merge sort's merge step",
     "Dijkstra's algorithm"
    ],
    1
   ],
   [
    "Left-rotating [1,2,3,4,5,6,7] by 2 gives",
    [
     "[3,4,5,6,7,1,2]",
     "[1,2,3,4,5,6,7]",
     "[7,1,2,3,4,5,6]",
     "[2,3,4,5,6,7,1]"
    ],
    0
   ],
   [
    "Block Swap Algorithm is commonly used for:",
    [
     "Array rotation",
     "GCD",
     "Multiplication",
     "Searching"
    ],
    0
   ],
   [
    "A left rotation by d moves the first d elements to the:",
    [
     "End",
     "Middle",
     "Beginning unchanged",
     "Sorted position"
    ],
    0
   ],
   [
    "For [1,2,3,4,5,6,7] rotated left by 2, result is:",
    [
     "[3,4,5,6,7,1,2]",
     "[2,3,4,5,6,7,1]",
     "[6,7,1,2,3,4,5]",
     "[1,2,7,6,5,4,3]"
    ],
    0
   ],
   [
    "In block swap rotation, the array is divided into:",
    [
     "Two blocks",
     "Only one element",
     "A tree",
     "A heap"
    ],
    0
   ],
   [
    "If d=0, a left rotation should:",
    [
     "Leave array unchanged",
     "Reverse array",
     "Sort array",
     "Delete first element"
    ],
    0
   ],
   [
    "If d equals n, a left rotation should:",
    [
     "Leave array unchanged",
     "Reverse array",
     "Shift by one",
     "Fail"
    ],
    0
   ],
   [
    "A common optimization is to first compute:",
    [
     "d % n",
     "d*n",
     "n-d only",
     "n+d"
    ],
    0
   ],
   [
    "If d>n, effective rotation amount is:",
    [
     "d*n",
     "d%n",
     "n-d",
     "d/ n"
    ],
    1
   ],
   [
    "For n=7 and d=2, the first block contains:",
    [
     "1,2",
     "1,2,3",
     "3,4",
     "6,7"
    ],
    0
   ],
   [
    "The second block for n=7,d=2 contains:",
    [
     "1,2",
     "3,4,5,6,7",
     "2,3,4,5",
     "6,7"
    ],
    1
   ],
   [
    "Block swapping rotates elements by:",
    [
     "Exchanging equal-sized portions recursively/iteratively",
     "Sorting all elements",
     "Using multiplication",
     "Using hashing"
    ],
    0
   ],
   [
    "A key issue in implementation is correctly updating:",
    [
     "Block boundaries",
     "Prime numbers",
     "ASCII codes",
     "GCD"
    ],
    0
   ],
   [
    "The algorithm can achieve rotation in:",
    [
     "O(n) time",
     "O(n²) always",
     "O(2ⁿ)",
     "O(log n) time with no element moves"
    ],
    0
   ],
   [
    "The typical extra space requirement is:",
    [
     "O(1)",
     "O(n)",
     "O(n²)",
     "O(log n) stack always"
    ],
    0
   ],
   [
    "Right rotation by d can be converted to left rotation by:",
    [
     "d",
     "n-d",
     "n+d only",
     "d-n"
    ],
    1
   ],
   [
    "For [1,2,3,4], left rotation by 1 gives:",
    [
     "[2,3,4,1]",
     "[4,1,2,3]",
     "[1,4,3,2]",
     "[3,4,1,2]"
    ],
    0
   ],
   [
    "A correct rotation preserves:",
    [
     "All elements and their relative cyclic order",
     "Only the maximum",
     "Only the minimum",
     "Sorted order"
    ],
    0
   ]
  ]
 },
 {
  "n": "Max Product Subarray",
  "g": 2,
  "q": [
   [
    "The problem asks to find",
    [
     "Subarray with max sum",
     "Contiguous subarray with max product",
     "Longest subarray",
     "Subarray with min product"
    ],
    1
   ],
   [
    "Kadane's algorithm can't be reused directly because",
    [
     "Product doesn't exist for arrays",
     "Negative number can flip min into max, vice versa",
     "Kadane only works on size-1 arrays",
     "No efficient solution exists"
    ],
    1
   ],
   [
    "Efficient approach tracks at each index",
    [
     "Only max product so far",
     "Both max and min product ending there",
     "Only min product so far",
     "Sum of all products"
    ],
    1
   ],
   [
    "Time complexity of optimal solution",
    [
     "O(n^2)",
     "O(n)",
     "O(n log n)",
     "O(2^n)"
    ],
    1
   ],
   [
    "On encountering a negative number, we",
    [
     "Ignore it",
     "Swap tracked max and min",
     "Reset both to 0",
     "Terminate algorithm"
    ],
    1
   ],
   [
    "If array contains a 0, the algorithm",
    [
     "Must include the 0",
     "Resets running product, fresh start after 0",
     "Cannot be computed",
     "Always returns 0"
    ],
    1
   ],
   [
    "For [2,3,−2,4], max product subarray value",
    [
     "6",
     "24",
     "−4",
     "8"
    ],
    0
   ],
   [
    "For [−2,0,−1], max product subarray value",
    [
     "2",
     "0",
     "−1",
     "−2"
    ],
    1
   ],
   [
    "For [−2,3,−4], max product subarray value",
    [
     "3",
     "−4",
     "24",
     "−24"
    ],
    2
   ],
   [
    "Space complexity of optimal solution",
    [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(n^2)"
    ],
    1
   ],
   [
    "This problem is categorized under",
    [
     "Graph algorithms",
     "Dynamic programming",
     "Greedy algorithms",
     "Backtracking"
    ],
    1
   ],
   [
    "All-negative array, even count of negatives, max product is",
    [
     "Negative",
     "Product of entire array",
     "Zero",
     "Undefined"
    ],
    1
   ],
   [
    "All-negative array, odd count, optimal answer excludes",
    [
     "The first negative element",
     "One negative element (leftmost/rightmost)",
     "All negative elements",
     "None, impossible"
    ],
    1
   ],
   [
    "For single-element array [−5], max product subarray",
    [
     "0",
     "−5",
     "5",
     "Undefined"
    ],
    1
   ],
   [
    "Brute-force time complexity",
    [
     "O(n)",
     "O(n^2)",
     "O(log n)",
     "O(1)"
    ],
    1
   ],
   [
    "The maximum product subarray problem asks for:",
    [
     "Largest product of a contiguous subarray",
     "Largest sum of any elements",
     "Longest subsequence",
     "Smallest product"
    ],
    0
   ],
   [
    "Why track both maximum and minimum products ending at a position?",
    [
     "A negative number can turn minimum into maximum",
     "To sort the array",
     "To find length only",
     "Because zero is prime"
    ],
    0
   ],
   [
    "For [-2,3,-4], the maximum product is:",
    [
     "6",
     "24",
     "-24",
     "12"
    ],
    1
   ],
   [
    "For [2,3,-2,4], the maximum product is:",
    [
     "6",
     "24",
     "-48",
     "8"
    ],
    1
   ],
   [
    "A zero in the array generally:",
    [
     "Resets the running product state",
     "Always increases product",
     "Is ignored completely",
     "Makes answer undefined"
    ],
    0
   ],
   [
    "If current number is negative, max and min states are commonly:",
    [
     "Swapped before multiplication",
     "Deleted",
     "Sorted",
     "Added"
    ],
    0
   ],
   [
    "For [0, -2, 0], maximum product is:",
    [
     "-2",
     "0",
     "2",
     "-4"
    ],
    1
   ],
   [
    "The standard optimized solution uses:",
    [
     "O(1) extra space",
     "O(n²) space",
     "A stack of all products",
     "A graph"
    ],
    0
   ],
   [
    "The time complexity of the standard dynamic approach is:",
    [
     "O(n)",
     "O(n²)",
     "O(log n)",
     "O(2ⁿ)"
    ],
    0
   ],
   [
    "For [2,-5,-2,-4,3], the maximum product is:",
    [
     "24",
     "40",
     "80",
     "120"
    ],
    0,
    "The best subarray is [-2, -4, 3] = 24. The PDF key lists C (80), which no subarray produces."
   ],
   [
    "A subarray must be:",
    [
     "Contiguous",
     "Non-contiguous",
     "Sorted",
     "Unique"
    ],
    0
   ],
   [
    "A subsequence differs from a subarray because it:",
    [
     "May skip elements",
     "Must be contiguous",
     "Must be sorted",
     "Cannot contain negatives"
    ],
    0
   ],
   [
    "For a single-element array [-5], the maximum product is:",
    [
     "0",
     "5",
     "-5",
     "1"
    ],
    2
   ],
   [
    "If current value is positive, current maximum is based on:",
    [
     "max*value",
     "min*value only",
     "sum",
     "division"
    ],
    0
   ],
   [
    "The minimum product is important mainly because of:",
    [
     "Negative values",
     "Only positive values",
     "Zeros only",
     "Array length"
    ],
    0
   ],
   [
    "For [1,-2,3,-4], the maximum product is:",
    [
     "24",
     "12",
     "-24",
     "6"
    ],
    0
   ],
   [
    "A common incorrect approach is to track only the maximum product because:",
    [
     "It loses useful negative-product state",
     "It sorts the array",
     "It ignores zeros only",
     "It uses too much memory"
    ],
    0
   ]
  ]
 },
 {
  "n": "Maximum Sum of Hourglass in a Matrix",
  "g": 2,
  "q": [
   [
    "An hourglass shape has how many elements",
    [
     "5",
     "7",
     "9",
     "6"
    ],
    1
   ],
   [
    "The hourglass pattern looks like",
    [
     "Full 3x3 block",
     "Top row(3), middle(1), bottom row(3)",
     "A diagonal line",
     "An L-shape"
    ],
    1
   ],
   [
    "For hourglass top-left at (i,j), middle element is",
    [
     "mat[i][j]",
     "mat[i+1][j+1]",
     "mat[i+2][j+2]",
     "mat[i][j+2]"
    ],
    1
   ],
   [
    "For n×n matrix, number of possible hourglasses",
    [
     "n × n",
     "(n−2) × (n−2)",
     "(n−1) × (n−1)",
     "n × (n−2)"
    ],
    1
   ],
   [
    "Brute-force time complexity",
    [
     "O(n)",
     "O(n^2)",
     "O(n^3)",
     "O(log n)"
    ],
    1
   ],
   [
    "Middle-row \"side\" elements NOT included",
    [
     "mat[i+1][j], mat[i+1][j+2]",
     "mat[i][j], mat[i][j+2]",
     "mat[i+2][j], mat[i+2][j+2]",
     "None, all included"
    ],
    0
   ],
   [
    "For a 3×3 matrix, number of hourglasses",
    [
     "0",
     "1",
     "3",
     "9"
    ],
    1
   ],
   [
    "This challenge is well-known on",
    [
     "LeetCode only",
     "HackerRank",
     "Codeforces only",
     "Project Euler"
    ],
    1
   ],
   [
    "For matrix smaller than 3×3, hourglasses possible",
    [
     "1",
     "0",
     "4",
     "2"
    ],
    1
   ],
   [
    "Space complexity (excluding input)",
    [
     "O(n^2)",
     "O(1)",
     "O(n)",
     "O(n^3)"
    ],
    1
   ],
   [
    "Technique to optimize repeated calculations",
    [
     "Sliding window / running sums",
     "Binary search",
     "Recursion, no memoization",
     "Sorting the matrix"
    ],
    0
   ],
   [
    "Classic 6×6 test matrix's known max hourglass sum",
    [
     "7",
     "19",
     "13",
     "28"
    ],
    1
   ],
   [
    "The hourglass pattern is symmetric about",
    [
     "Its top row",
     "Its middle element (both axes)",
     "Its bottom-left corner",
     "No symmetry"
    ],
    1
   ],
   [
    "If all elements negative, max hourglass sum is",
    [
     "Zero",
     "The least negative (max) sum",
     "Undefined",
     "Always most negative sum"
    ],
    1
   ],
   [
    "Total elements considered per hourglass sum",
    [
     "9",
     "7",
     "6",
     "5"
    ],
    1
   ],
   [
    "A standard hourglass in a matrix contains how many elements?",
    [
     "5",
     "7",
     "8",
     "9"
    ],
    1
   ],
   [
    "For a 3x3 hourglass, the middle row contributes:",
    [
     "Three elements",
     "Two elements",
     "One element",
     "Four elements"
    ],
    2
   ],
   [
    "The hourglass shape is:",
    [
     "a b c / . d . / e f g",
     "a b / c d / e f",
     "a / b c / d",
     "a b c d"
    ],
    0
   ],
   [
    "In an R x C matrix, a 3x3 hourglass can start at rows up to:",
    [
     "R-3",
     "R-2",
     "R-1",
     "R"
    ],
    0
   ],
   [
    "Similarly, valid starting columns are up to:",
    [
     "C-3",
     "C-2",
     "C-1",
     "C"
    ],
    0
   ],
   [
    "For a 6x6 matrix, the number of 3x3 hourglass positions is:",
    [
     "9",
     "12",
     "16",
     "36"
    ],
    2
   ],
   [
    "For a 3x3 matrix, how many hourglasses exist?",
    [
     "0",
     "1",
     "3",
     "9"
    ],
    1
   ],
   [
    "The brute-force time complexity for all hourglasses is:",
    [
     "O(RC)",
     "O(R²C²)",
     "O(3^n)",
     "O(log RC)"
    ],
    0
   ],
   [
    "Each hourglass sum uses how many additions conceptually?",
    [
     "7 values",
     "3 values",
     "9 values",
     "6 values"
    ],
    0
   ],
   [
    "If matrix values can be negative, initializing max to 0 may be:",
    [
     "Incorrect",
     "Always optimal",
     "Required",
     "Equivalent"
    ],
    0
   ],
   [
    "A safer initial maximum is often:",
    [
     "Negative infinity / first hourglass sum",
     "0 always",
     "1",
     "Integer.MIN_VALUE + 1 only"
    ],
    0
   ],
   [
    "For matrix [[1,2,3],[4,5,6],[7,8,9]], hourglass sum is:",
    [
     "35",
     "36",
     "37",
     "45"
    ],
    0
   ],
   [
    "The center of the hourglass is:",
    [
     "The middle element of the middle row",
     "The top-left element",
     "The bottom-right element",
     "The center column top"
    ],
    0
   ],
   [
    "A 4x4 matrix contains how many 3x3 hourglasses?",
    [
     "2",
     "4",
     "6",
     "8"
    ],
    1
   ],
   [
    "An hourglass problem is primarily an example of:",
    [
     "Matrix traversal",
     "Graph coloring",
     "Bit manipulation",
     "Recursion only"
    ],
    0
   ],
   [
    "To find all hourglasses, nested loops typically iterate over:",
    [
     "Top-left positions",
     "Only diagonal cells",
     "Only borders",
     "Only center cells"
    ],
    0
   ],
   [
    "If R<3 or C<3, the number of 3x3 hourglasses is:",
    [
     "0",
     "1",
     "R*C",
     "R+C"
    ],
    0
   ]
  ]
 },
 {
  "n": "Max Equilibrium Sum",
  "g": 2,
  "q": [
   [
    "Equilibrium index is where",
    [
     "Element is the max in array",
     "Sum before equals sum after",
     "Element equals zero",
     "Index is exact middle"
    ],
    1
   ],
   [
    "\"Max Equilibrium Sum\" asks for",
    [
     "Number of equilibrium indices",
     "Among equilibrium indices, one with max prefix sum",
     "Largest element in array",
     "Sum of whole array"
    ],
    1
   ],
   [
    "Brute-force time complexity",
    [
     "O(n)",
     "O(n^2)",
     "O(log n)",
     "O(1)"
    ],
    1
   ],
   [
    "Efficient approach uses",
    [
     "Prefix sum array",
     "Binary search tree",
     "Hashing only",
     "Sorting the array"
    ],
    0
   ],
   [
    "Time complexity of optimal approach",
    [
     "O(n)",
     "O(n^2)",
     "O(n log n)",
     "O(2^n)"
    ],
    0
   ],
   [
    "Equilibrium condition at index i",
    [
     "prefixSum[i-1]==totalSum-prefixSum[i]",
     "prefixSum[i]==totalSum",
     "arr[i]==totalSum/2",
     "prefixSum[i]==0"
    ],
    0
   ],
   [
    "If no equilibrium index exists, result is defined as",
    [
     "0",
     "−1 / \"not found\"",
     "Full array sum",
     "Infinity"
    ],
    1
   ],
   [
    "For [−7,1,5,2,−4,3,0], equilibrium index (0-based)",
    [
     "0",
     "3",
     "5",
     "6"
    ],
    1
   ],
   [
    "Space complexity using an extra prefix-sum array",
    [
     "O(1)",
     "O(n)",
     "O(n^2)",
     "O(log n)"
    ],
    1
   ],
   [
    "Can this be solved in O(1) extra space, O(n) time?",
    [
     "No, extra array always mandatory",
     "Yes, track running totals on the fly",
     "Only in O(n^2) time",
     "Only with recursion"
    ],
    1
   ],
   [
    "With multiple equilibrium indices, \"max equilibrium sum\" means",
    [
     "Sum at first equilibrium index only",
     "Largest prefix sum among all equilibrium indices",
     "Average of all equilibrium sums",
     "Last equilibrium index's sum"
    ],
    1
   ],
   [
    "For [1,2,3], is there an equilibrium index?",
    [
     "Yes, at index 0",
     "No",
     "Yes, at index 1",
     "Yes, at index 2"
    ],
    1
   ],
   [
    "For [1,3,5,2,2], equilibrium index",
    [
     "0",
     "2",
     "3",
     "4"
    ],
    1
   ],
   [
    "Prefix sum at equilibrium index i equals",
    [
     "arr[i]",
     "totalSum − (sum after i)",
     "0, always",
     "totalSum/2, always"
    ],
    1
   ],
   [
    "This problem is a variant of",
    [
     "Two Sum",
     "Pivot Index",
     "Longest Increasing Subsequence",
     "Subset Sum"
    ],
    1
   ],
   [
    "An equilibrium index is a position where:",
    [
     "Left sum equals right sum",
     "Left element equals right element",
     "All elements are equal",
     "Index equals sum"
    ],
    0
   ],
   [
    "For [1,3,5,2,2], an equilibrium index is:",
    [
     "0",
     "1",
     "2",
     "4"
    ],
    2
   ],
   [
    "At an equilibrium index, the element itself is generally:",
    [
     "Excluded from both side sums",
     "Included on both sides",
     "Always zero",
     "Doubled"
    ],
    0
   ],
   [
    "A common O(n) method first computes:",
    [
     "Total sum",
     "Sorted array",
     "GCD",
     "Product"
    ],
    0
   ],
   [
    "While scanning, right sum can be computed as:",
    [
     "total-left-current",
     "total+left+current",
     "left-current",
     "current-total"
    ],
    0
   ],
   [
    "The maximum equilibrium sum is:",
    [
     "The largest common left/right sum among equilibrium indices",
     "The maximum element",
     "The total sum",
     "The product"
    ],
    0
   ],
   [
    "For [1,2,3], there is:",
    [
     "No equilibrium index",
     "An equilibrium at 1",
     "An equilibrium at 0",
     "An equilibrium at 2"
    ],
    0
   ],
   [
    "For [1,-1,0], index 2 is equilibrium because:",
    [
     "Left sum 0 equals right sum 0",
     "Both sides are 1",
     "Element is 1",
     "Total is 1"
    ],
    0
   ],
   [
    "A naive equilibrium solution can take:",
    [
     "O(n²) time",
     "O(1) time always",
     "O(log n)",
     "O(2ⁿ) only"
    ],
    0
   ],
   [
    "The optimized prefix/suffix approach can take:",
    [
     "O(n) time and O(1) extra space",
     "O(n²) space",
     "O(log n) time",
     "O(n³)"
    ],
    0
   ],
   [
    "If total sum is 10 and current element is 4 with left sum 3, right sum is:",
    [
     "3",
     "7",
     "1",
     "4"
    ],
    0
   ],
   [
    "If no equilibrium index exists, the algorithm should:",
    [
     "Return a defined sentinel such as -1, depending on problem specification",
     "Return 0 always",
     "Return total",
     "Crash"
    ],
    0
   ],
   [
    "Negative numbers are:",
    [
     "Allowed in a general equilibrium-sum problem",
     "Always invalid",
     "Converted to zero",
     "Ignored"
    ],
    0
   ],
   [
    "An equilibrium index differs from maximum prefix sum because it requires:",
    [
     "Equality of two side sums",
     "Maximum value",
     "Sorted order",
     "Positive values"
    ],
    0
   ],
   [
    "If the array has one element [5], the left and right sums are:",
    [
     "Both 0",
     "Both 5",
     "Left 5 right 0",
     "Left 0 right 5"
    ],
    0
   ],
   [
    "The key invariant in a one-pass solution is maintaining:",
    [
     "Left sum while total remains available",
     "Only maximum element",
     "Only minimum element",
     "Sorted prefix"
    ],
    0
   ]
  ]
 },
 {
  "n": "Leaders in an Array",
  "g": 2,
  "q": [
   [
    "An element is a \"leader\" if",
    [
     "Greater than all before it",
     "Greater than all elements to its right",
     "It's the smallest element",
     "It appears more than once"
    ],
    1
   ],
   [
    "The last element of an array is",
    [
     "Never a leader",
     "Always a leader trivially",
     "A leader only if max overall",
     "Of undefined status"
    ],
    1
   ],
   [
    "Brute-force time complexity",
    [
     "O(n)",
     "O(n^2)",
     "O(n log n)",
     "O(log n)"
    ],
    1
   ],
   [
    "Efficient approach traverses",
    [
     "Left to right, running max",
     "Right to left, running max",
     "Using binary search",
     "Using a stack, no direction"
    ],
    1
   ],
   [
    "Time complexity of right-to-left approach",
    [
     "O(n)",
     "O(n^2)",
     "O(n log n)",
     "O(log n)"
    ],
    0
   ],
   [
    "Space complexity (excluding output)",
    [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(n^2)"
    ],
    1
   ],
   [
    "For [16,17,4,3,5,2], the leaders are",
    [
     "16,17,5,2",
     "16,17,4,3",
     "17 only",
     "2 only"
    ],
    0
   ],
   [
    "Strictly increasing sorted array, number of leaders",
    [
     "n (all)",
     "1 (last element)",
     "0",
     "n/2"
    ],
    1
   ],
   [
    "Strictly decreasing sorted array, number of leaders",
    [
     "n (all)",
     "1",
     "0",
     "n/2"
    ],
    0
   ],
   [
    "Leaders from right-to-left traversal are obtained",
    [
     "In reverse order, need final reversal",
     "Random order",
     "Automatically sorted",
     "Reverse alphabetical order"
    ],
    0
   ],
   [
    "For [5,5,5,5] with \">=\" definition, leaders are",
    [
     "Only last element",
     "All elements",
     "No elements",
     "Only first element"
    ],
    1
   ],
   [
    "This problem introduces the concept of",
    [
     "Dynamic programming",
     "Suffix maximum traversal",
     "Graph traversal",
     "Hashing"
    ],
    1
   ],
   [
    "An array with one element, that element is",
    [
     "Not a leader",
     "Always a leader",
     "Leader only if positive",
     "Undefined"
    ],
    1
   ],
   [
    "For [1,2,3,4,0], the leaders are",
    [
     "4, 0",
     "1,2,3,4",
     "4 only",
     "0 only"
    ],
    0
   ],
   [
    "Monotonic-stack style approach would",
    [
     "Push left-to-right, pop on comparison",
     "Traverse right to left, keep running max",
     "Require two stacks",
     "Not be applicable"
    ],
    1
   ],
   [
    "An array element is a leader if it is greater than or equal to:",
    [
     "All elements to its right",
     "All elements to its left",
     "The first element",
     "Its index"
    ],
    0
   ],
   [
    "The rightmost element is usually considered:",
    [
     "Always a leader",
     "Never a leader",
     "Leader only if negative",
     "Invalid"
    ],
    0
   ],
   [
    "The optimal standard scan direction is:",
    [
     "Right to left",
     "Left to right only",
     "Middle outward",
     "Random"
    ],
    0
   ],
   [
    "While scanning right to left, a new leader is found when current is:",
    [
     ">= maximum seen so far",
     "< maximum",
     "Equal to index",
     "0"
    ],
    0
   ],
   [
    "For [16,17,4,3,5,2], leaders are:",
    [
     "17,5,2",
     "16,17,5,2",
     "17,4,3,5,2",
     "2,5,17"
    ],
    0
   ],
   [
    "If the definition uses strictly greater instead of greater-or-equal, equal elements:",
    [
     "May not both be leaders",
     "Are always leaders",
     "Become zeros",
     "Are sorted"
    ],
    0
   ],
   [
    "The standard leader algorithm takes:",
    [
     "O(n) time",
     "O(n²) time",
     "O(log n)",
     "O(2ⁿ)"
    ],
    0
   ],
   [
    "Extra space for the result aside, the scan can use:",
    [
     "O(1) auxiliary space",
     "O(n²)",
     "O(n log n)",
     "O(2ⁿ)"
    ],
    0
   ],
   [
    "For [5,4,3,2,1], every element is:",
    [
     "A leader",
     "Not a leader",
     "Only 5 is leader",
     "Only 1 is leader"
    ],
    0
   ],
   [
    "For [1,2,3,4,5], which is a leader?",
    [
     "5 only",
     "1 only",
     "1 and 5",
     "All"
    ],
    0
   ],
   [
    "A common implementation stores leaders in:",
    [
     "Reverse order initially when scanning right-to-left",
     "Sorted order automatically",
     "A stack only",
     "A queue only"
    ],
    0
   ],
   [
    "To output leaders from left to right after a right-to-left scan, one can:",
    [
     "Reverse the collected list",
     "Delete it",
     "Sort numerically",
     "Use GCD"
    ],
    0
   ],
   [
    "The running variable in the standard algorithm represents:",
    [
     "Maximum to the right",
     "Minimum to the left",
     "Total sum",
     "Product"
    ],
    0
   ],
   [
    "If array is empty, the leader result is generally:",
    [
     "Empty",
     "One element",
     "Zero only",
     "Undefined always"
    ],
    0
   ],
   [
    "The problem is based on:",
    [
     "Comparison with all elements on the right",
     "Multiplication",
     "Bit shifting",
     "Matrix traversal"
    ],
    0
   ],
   [
    "For [7,7,6], under >= definition, leaders are:",
    [
     "7 at index 1 and 6",
     "Only final 6",
     "Both 7s and 6",
     "Only first 7"
    ],
    2
   ]
  ]
 },
 {
  "n": "Majority Element",
  "g": 2,
  "q": [
   [
    "Majority element appears",
    [
     "At least once",
     "More than n/2 times",
     "Exactly n/2 times",
     "Fewer than n/2 times"
    ],
    1
   ],
   [
    "Well-known linear-time, O(1)-space algorithm",
    [
     "Kadane's algorithm",
     "Boyer–Moore Voting Algorithm",
     "Dijkstra's algorithm",
     "Kruskal's algorithm"
    ],
    1
   ],
   [
    "Standard Boyer–Moore requires how many passes",
    [
     "1 pass, candidate+verify combined",
     "2 passes: find candidate, then verify",
     "3 passes",
     "log n passes"
    ],
    1
   ],
   [
    "Time complexity of Boyer–Moore",
    [
     "O(n)",
     "O(n log n)",
     "O(n^2)",
     "O(log n)"
    ],
    0
   ],
   [
    "Space complexity of Boyer–Moore",
    [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(n^2)"
    ],
    1
   ],
   [
    "\"count\" is incremented when",
    [
     "Element differs from candidate",
     "Element equals candidate",
     "Count is already zero",
     "Always"
    ],
    1
   ],
   [
    "When count reaches 0, we",
    [
     "Terminate immediately",
     "Pick current element as new candidate, reset count to 1",
     "Reset count to 0 permanently",
     "Return \"no majority\""
    ],
    1
   ],
   [
    "Can an array have more than one majority element?",
    [
     "Yes, always two",
     "No, at most one",
     "Yes, up to three",
     "Only if sorted"
    ],
    1
   ],
   [
    "Sorting-based approach time complexity",
    [
     "O(n)",
     "O(n log n)",
     "O(n^2)",
     "O(log n)"
    ],
    1
   ],
   [
    "Hashmap-based counting: time and space",
    [
     "O(n) time, O(n) space",
     "O(n) time, O(1) space",
     "O(n^2) time, O(1) space",
     "O(log n) time, O(n) space"
    ],
    0
   ],
   [
    "In sorting approach, majority element (if exists) found at",
    [
     "First index",
     "Last index",
     "Middle index (n/2)",
     "Random index"
    ],
    2
   ],
   [
    "Verification pass is necessary because",
    [
     "Always correct without it",
     "Candidate may not truly be majority if none exists",
     "Improves time complexity",
     "Reduces space complexity"
    ],
    1
   ],
   [
    "For [2,2,1,1,1,2,2], majority element",
    [
     "1",
     "2",
     "No majority exists",
     "0"
    ],
    1
   ],
   [
    "For [1,2,3,4], majority element",
    [
     "1",
     "4",
     "No majority element exists",
     "2"
    ],
    2
   ],
   [
    "\"Majority Element II\" asks for elements appearing more than",
    [
     "n/2 times",
     "n/3 times",
     "n/4 times",
     "n times"
    ],
    1
   ],
   [
    "A majority element appears more than:",
    [
     "n/2 times",
     "n times",
     "n/3 times",
     "sqrt(n) times"
    ],
    0
   ],
   [
    "Boyer-Moore Voting Algorithm is used to find:",
    [
     "Majority element",
     "Maximum subarray product only",
     "GCD",
     "Leaders only"
    ],
    0
   ],
   [
    "The candidate count starts at:",
    [
     "0",
     "1",
     "-1",
     "n"
    ],
    0
   ],
   [
    "When count becomes zero, Boyer-Moore chooses the current value as:",
    [
     "New candidate",
     "Final answer always",
     "Minimum",
     "Maximum"
    ],
    0
   ],
   [
    "If current value equals candidate, count is:",
    [
     "Incremented",
     "Decremented",
     "Reset",
     "Divided"
    ],
    0
   ],
   [
    "If current value differs from candidate, count is:",
    [
     "Decremented",
     "Incremented twice",
     "Reset to n",
     "Multiplied"
    ],
    0
   ],
   [
    "Boyer-Moore's first pass gives:",
    [
     "A candidate, not necessarily a verified majority",
     "A guaranteed majority always",
     "Sorted array",
     "Frequency map"
    ],
    0
   ],
   [
    "A second pass is needed when:",
    [
     "The input is not guaranteed to contain a majority",
     "The array is sorted",
     "All values are positive",
     "n is even"
    ],
    0
   ],
   [
    "The standard Boyer-Moore time complexity is:",
    [
     "O(n)",
     "O(n²)",
     "O(log n)",
     "O(2ⁿ)"
    ],
    0
   ],
   [
    "Its auxiliary space is:",
    [
     "O(1)",
     "O(n)",
     "O(n²)",
     "O(log n)"
    ],
    0
   ],
   [
    "For [2,2,1,1,1,2,2], the majority element is:",
    [
     "1",
     "2",
     "No majority",
     "3"
    ],
    1
   ],
   [
    "For [3,3,4], the majority element is:",
    [
     "3",
     "4",
     "No majority",
     "0"
    ],
    0
   ],
   [
    "For [1,2,3,4], there is:",
    [
     "No majority element",
     "Majority 1",
     "Majority 4",
     "Majority 2"
    ],
    0
   ],
   [
    "The condition for verifying candidate x is:",
    [
     "count(x) > n/2",
     "count(x) >= n",
     "count(x) > n/3",
     "count(x)==2"
    ],
    0
   ],
   [
    "A HashMap solution typically uses:",
    [
     "O(n) extra space",
     "O(1) extra space",
     "O(log n) space",
     "No memory"
    ],
    0
   ],
   [
    "Boyer-Moore works because:",
    [
     "Different elements can cancel each other in pairs",
     "It sorts values",
     "It multiplies counts",
     "It uses recursion"
    ],
    0
   ]
  ]
 },
 {
  "n": "Lexicographically First Palindromic String",
  "g": 2,
  "q": [
   [
    "This problem asks to rearrange characters into",
    [
     "Longest palindrome",
     "Lexicographically smallest palindrome",
     "Reversed string",
     "Anagram that isn't a palindrome"
    ],
    1
   ],
   [
    "A palindrome rearrangement is possible iff",
    [
     "All characters are distinct",
     "At most one character has odd frequency",
     "String length is even",
     "No repeating characters"
    ],
    1
   ],
   [
    "If more than one character has odd frequency",
    [
     "Return original string",
     "\"Not possible\"",
     "Random anagram",
     "Reverse of string"
    ],
    1
   ],
   [
    "Lexicographically smallest palindrome: characters placed",
    [
     "Randomly",
     "Ascending order, symmetric outside-in",
     "Descending order only",
     "Alternating order"
    ],
    1
   ],
   [
    "The odd-frequency character (if any) is placed",
    [
     "At the very beginning",
     "At the very end",
     "Exactly in the middle",
     "Anywhere"
    ],
    2
   ],
   [
    "Time complexity to construct the palindrome",
    [
     "O(n)",
     "O(n log n) due to sorting",
     "O(n^2)",
     "O(2^n)"
    ],
    1
   ],
   [
    "For \"aabb\", lexicographically smallest palindrome",
    [
     "\"bttb\"",
     "\"abba\"",
     "\"baab\"",
     "\"bbaa\""
    ],
    1
   ],
   [
    "For \"aabbcc\", one valid smallest palindrome",
    [
     "\"abcba\"",
     "\"abccba\"",
     "\"ccbabc\"",
     "\"cbaabc\""
    ],
    1
   ],
   [
    "For \"aab\", lexicographically smallest palindrome",
    [
     "\"aba\"",
     "\"baa\"",
     "\"aab\"",
     "Not possible"
    ],
    0
   ],
   [
    "Odd string length: how many chars may have odd frequency",
    [
     "0",
     "Exactly 1",
     "2",
     "Any number"
    ],
    1
   ],
   [
    "Even string length: how many chars may have odd frequency",
    [
     "Exactly 1",
     "0",
     "2",
     "Any even number"
    ],
    1
   ],
   [
    "Data structure used to count frequencies",
    [
     "A stack",
     "Frequency array/hashmap",
     "A queue",
     "A linked list"
    ],
    1
   ],
   [
    "For \"cdcd\", lexicographically smallest palindrome",
    [
     "\"dccd\"",
     "\"cddc\"",
     "\"cdcd\"",
     "\"ddcc\""
    ],
    1
   ],
   [
    "For lexicographic minimality, process characters in",
    [
     "Descending alphabetical order",
     "Ascending alphabetical order",
     "Order of first appearance",
     "Random order"
    ],
    1
   ],
   [
    "9-char string, only 'e' has odd count (1): 'e' is placed",
    [
     "At the start",
     "At the end",
     "In the exact middle",
     "Impossible, no palindrome"
    ],
    2
   ],
   [
    "A palindrome reads the same:",
    [
     "Forward and backward",
     "Only forward",
     "Only backward",
     "By length"
    ],
    0
   ],
   [
    "Lexicographically smaller strings are determined first by:",
    [
     "The first differing character",
     "Length only",
     "Last character only",
     "Number of vowels"
    ],
    0
   ],
   [
    "To build the lexicographically smallest palindrome from a multiset of characters, one generally places smaller characters:",
    [
     "As early as possible",
     "Only at the end",
     "Randomly",
     "Only in the center"
    ],
    0
   ],
   [
    "A string can be rearranged into a palindrome if:",
    [
     "At most one character has odd frequency",
     "All frequencies are odd",
     "Exactly two are odd",
     "No character repeats"
    ],
    0
   ],
   [
    "For even-length palindrome construction, all character frequencies must be:",
    [
     "Even",
     "Odd",
     "Prime",
     "Distinct"
    ],
    0
   ],
   [
    "For odd-length palindrome construction, how many odd-frequency characters are allowed?",
    [
     "0 only",
     "At most 1",
     "Exactly 2",
     "Any number"
    ],
    1
   ],
   [
    "For input characters 'aabb', the lexicographically smallest palindromic arrangement is:",
    [
     "abba",
     "baab",
     "aabb",
     "baba"
    ],
    0
   ],
   [
    "For 'aabbc', the lexicographically smallest palindrome is:",
    [
     "abcba",
     "bacab",
     "abbca",
     "acbba"
    ],
    0
   ],
   [
    "For 'aaabbbb', which statement is correct?",
    [
     "A palindrome arrangement is possible",
     "Impossible because two odds",
     "Impossible because length is odd",
     "Only one arrangement exists"
    ],
    0
   ],
   [
    "A frequency array for lowercase English letters usually has size:",
    [
     "26",
     "52",
     "128",
     "256"
    ],
    0
   ],
   [
    "To construct the first half, each character contributes approximately:",
    [
     "frequency/2 copies",
     "frequency copies always",
     "one copy always",
     "frequency*2 copies"
    ],
    0
   ],
   [
    "For an odd-length palindrome, the center is:",
    [
     "The one character with odd frequency, if present",
     "Always 'a'",
     "The largest character twice",
     "Empty"
    ],
    0
   ],
   [
    "If the string cannot be rearranged into a palindrome, a program may return:",
    [
     "A specified failure value/message",
     "Any palindrome",
     "The sorted string automatically",
     "The reverse"
    ],
    0
   ],
   [
    "For 'cbaabc', the lexicographically smallest palindrome is:",
    [
     "abccba",
     "acbbca",
     "baacca",
     "cbbaac"
    ],
    0
   ],
   [
    "For 'bbaa', the lexicographically smallest palindrome is:",
    [
     "abba",
     "baab",
     "aabb",
     "baba"
    ],
    0
   ],
   [
    "The safest way to guarantee lexicographic minimality is to process characters:",
    [
     "In ascending order",
     "In descending order",
     "Randomly",
     "By original position only"
    ],
    0
   ]
  ]
 }
];

// Extra questions from more_questions.pdf, merged into existing FAT topics by name (duplicates removed; corrected keys carry a note).
// Loaded in app.js after the originals so existing question ids (and saved progress) do not change.
const MORE = [
 {
  "n": "Natural Sort Order",
  "q": [
   ["Consider the filenames file1, file10, file2, and file20. What is their order after applying natural sorting in ascending order?", ["file1, file10, file2, file20", "file1, file2, file10, file20", "file10, file1, file20, file2", "file2, file1, file10, file20"], 1],
   ["What is the primary difference between lexicographical sorting and natural sorting when comparing item12 and item3?", ["Both always produce the same order", "Lexicographical sorting compares numeric portions as numbers", "Natural sorting compares numeric portions by numerical value", "Natural sorting ignores numeric portions"], 2],
   ["Given the strings A5, A12, A3, and A20, which string appears third after natural ascending sorting?", ["A3", "A5", "A12", "A20"], 2],
   ["A system sorts the filenames log1, log11, and log2 using ordinary lexicographical order. What is the resulting order?", ["log1, log2, log11", "log2, log1, log11", "log11, log1, log2", "log1, log11, log2"], 3],
   ["Which approach is most suitable for implementing natural sorting of alphanumeric strings?", ["Compare every character using ASCII values only", "Split strings into numeric and non-numeric portions and compare corresponding portions", "Reverse each string before comparison", "Sort strings according to their lengths only"], 1],
   ["Consider test009, test10, and test2. If leading zeros are ignored when comparing numeric portions, what is the natural ascending order?", ["test009, test2, test10", "test2, test009, test10", "test10, test2, test009", "test2, test10, test009"], 1],
   ["What should a natural sorting comparator do when both corresponding portions are numeric?", ["Compare their ASCII representations", "Compare their numerical values", "Compare the number of characters only", "Ignore both numeric portions"], 1],
   ["Given img1, img2, img10, and img100, how many elements appear before img10 in natural ascending order?", ["0", "1", "2", "3"], 2],
   ["Which of the following sequences is correctly sorted using natural ascending order?", ["v1, v10, v11, v2", "v10, v11, v1, v2", "v1, v2, v10, v11", "v2, v1, v11, v10"], 2],
   ["A natural sorting comparator compares data25 and data7. Which comparison determines the result?", ["ASCII comparison of 2 and 7", "Numerical comparison of 25 and 7", "Length comparison of the complete strings", "Reverse comparison of the strings"], 1],
   ["If a natural sorting comparator returns zero for two different strings, what does it indicate?", ["The strings must be identical", "The first string is smaller", "The second string is smaller", "The comparator considers them equivalent"], 3],
   ["Which data structure is commonly used when storing strings that need to be sorted using a custom natural ordering?", ["Stack", "PriorityQueue with a natural-order comparator", "Queue without a comparator", "HashSet only"], 1],
   ["Consider chapter2, chapter02, and chapter10. If leading zeros are ignored and equal numeric values are treated as equivalent, which two strings compare as equivalent?", ["chapter2 and chapter10", "chapter02 and chapter10", "chapter2 and chapter02", "All three"], 2],
   ["What is the time complexity of comparison-based sorting of N strings when each comparison takes O(L), where L is the maximum string length?", ["O(N)", "O(N log N)", "O(N log N × L)", "O(N² × L²)"], 2],
   ["A natural sorting comparator processes a12b4 and a12b15. At which portion does the first difference occur?", ["First alphabetic portion", "First numeric portion", "Second alphabetic portion", "Second numeric portion"], 3],
   ["Which issue can occur if a custom natural sorting comparator does not handle very large numeric portions safely?", ["Stack overflow in every comparison", "Integer overflow during numeric conversion", "Automatic reversal of strings", "Duplicate removal"], 1],
   ["A directory contains folder1, folder3, folder12, and folder4. Which folder appears immediately before folder12 in natural ascending order?", ["folder1", "folder3", "folder4", "folder12"], 2],
   ["If a sorting algorithm uses a stable sorting method with a natural comparator, what happens to elements considered equal by that comparator?", ["Their original relative order is preserved", "Their original order is always reversed", "They are automatically removed", "They are moved to the beginning"], 0],
   ["Which input is most likely to demonstrate a difference between natural sorting and ordinary lexicographical sorting?", ["apple, banana, mango", "cat, dog, elephant", "file1, file2, file10", "red, green, blue"], 2],
   ["When implementing natural sorting, why should consecutive digits be processed as one numeric segment rather than individually?", ["To reduce the number of strings", "To compare complete numerical values correctly", "To eliminate alphabetic characters", "To make every comparison constant time"], 1]
  ]
 },
 {
  "n": "Quick Sort",
  "q": [
   ["Which sorting algorithm selects a pivot element and partitions the array into elements smaller and larger than the pivot?", ["Selection Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"], 2],
   ["In Quick Sort, what happens after the partition operation is completed?", ["The entire array becomes sorted immediately", "The pivot reaches its correct sorted position", "The array is reversed", "The smallest element is removed"], 1],
   ["Consider the array [8, 4, 7, 3, 10]. If the last element is selected as the pivot using Lomuto partitioning, which elements appear before the pivot after partitioning?", ["8, 4, 7, 3", "10, 8, 4, 7", "8, 10, 4, 7", "3, 10, 8, 4"], 0],
   ["Which statement correctly describes the space complexity of recursive Quick Sort in the average case?", ["O(1)", "O(log N)", "O(N²)", "O(N log N)"], 1],
   ["Which statement about standard Quick Sort is correct?", ["It is always stable", "It generally sorts in place but is not stable", "It always requires O(N) auxiliary array space", "It never uses recursion"], 1],
   ["An array is already sorted in ascending order. Quick Sort always selects the last element as its pivot. What is its worst-case time complexity?", ["O(N)", "O(log N)", "O(N log N)", "O(N²)"], 3],
   ["Which algorithm generally performs better for large randomly ordered arrays when implemented with a good pivot strategy?", ["Selection Sort", "Quick Sort", "Both always have identical performance", "Neither can handle large arrays"], 1],
   ["Consider [5, 2, 8, 1, 9]. If the first element is chosen as the pivot in Quick Sort, which element is the pivot?", ["1", "2", "5", "9"], 2],
   ["What is the best-case time complexity of Quick Sort when partitioning divides the array into two nearly equal halves at every level?", ["O(N)", "O(N log N)", "O(N²)", "O(log N)"], 1]
  ]
 },
 {
  "n": "Selection Sort",
  "q": [
   ["How many comparisons are performed by standard Selection Sort for an array containing N elements?", ["N log N", "N(N−1)/2", "N−1", "N² log N"], 1],
   ["Consider the array [29, 10, 14, 37, 13]. What will the array look like after the first pass of Selection Sort in ascending order?", ["[10, 29, 14, 37, 13]", "[13, 10, 14, 37, 29]", "[29, 10, 13, 37, 14]", "[10, 14, 29, 37, 13]"], 0, "The PDF key lists B, but the first pass swaps the minimum (10) into position 0, giving [10, 29, 14, 37, 13], so A is correct."],
   ["Which of the following is a major disadvantage of standard Selection Sort?", ["It requires additional O(N) memory", "It always performs O(N²) comparisons", "It cannot sort negative numbers", "It requires a pivot element"], 1],
   ["In Selection Sort, how many elements are in the sorted portion after completing the third pass on an array of 8 elements?", ["2", "3", "4", "5"], 1],
   ["Which sorting algorithm performs the same number of comparisons regardless of whether the input array is already sorted or randomly arranged?", ["Quick Sort", "Selection Sort", "Merge Sort", "Insertion Sort"], 1],
   ["Why is Selection Sort considered an in-place sorting algorithm?", ["It uses a separate array of size N", "It rearranges elements within the original array using constant auxiliary space", "It stores all elements in a heap", "It creates a recursive copy of the array"], 1],
   ["A developer needs a sorting algorithm that performs very few swaps, even though it may perform many comparisons. Which algorithm is more suitable?", ["Quick Sort", "Selection Sort", "Bubble Sort", "Merge Sort"], 1]
  ]
 },
 {
  "n": "Weighted Substring",
  "q": [
   ["A string P = \"abca\" has weight 1 assigned to every lowercase letter and maximum allowed weight K = 2. How many distinct non-empty substrings have total weight at most 2?", ["4", "5", "6", "7"], 2],
   ["In the Weighted Substring problem, what does the 26-character weight string represent?", ["Frequency of each character", "Weight assigned to each lowercase alphabet character", "Position of each character", "Number of unique substrings"], 1],
   ["Given P = \"abc\", with weights a = 1, b = 2, c = 3 and K = 3, how many distinct non-empty substrings satisfy the weight condition?", ["3", "4", "5", "6"], 1],
   ["If the weight of character a is zero, how does it affect the weight of a substring containing only a characters?", ["Its weight increases by one", "Its weight becomes equal to K", "Its total weight remains zero", "It becomes invalid"], 2],
   ["Why must duplicate substrings be counted only once in the Weighted Substring problem?", ["Because only distinct substring values are required", "Because repeated characters are invalid", "Because only substrings of length one are allowed", "Because duplicate substrings always exceed K"], 0],
   ["Which data structure is particularly suitable for counting distinct substrings efficiently while extending substrings from each starting position?", ["Stack", "Queue", "Trie", "Binary Search Tree"], 2],
   ["A substring has characters a, b, and c with weights 2, 3, and 4 respectively. If K = 8, what is the result?", ["Valid because its weight is 8", "Invalid because its weight is 9", "Valid because its length is 3", "Invalid because it contains three characters"], 1],
   ["When extending a substring by one character, how should its total weight be updated?", ["Recalculate the entire substring weight every time", "Add only the newly included character’s weight", "Subtract the previous character’s weight", "Multiply the previous weight by the new character’s weight"], 1],
   ["For a string of length N, what is the maximum possible number of distinct non-empty substrings?", ["N", "N(N+1)/2", "N²", "2ᴺ"], 1],
   ["Which condition allows an algorithm to stop extending a substring from a particular starting position when all character weights are non-negative?", ["Current weight becomes zero", "Current weight exceeds K", "Substring length becomes two", "A duplicate character is found"], 1],
   ["A string contains only the character a repeated N times, and the weight of a is zero. How many distinct non-empty substrings exist?", ["1", "N", "N−1", "N²"], 1, "The PDF key lists A, but a string of N identical letters has exactly N distinct substrings (a, aa, … up to length N), so B is correct."],
   ["Which technique avoids storing complete substring strings repeatedly while counting distinct substrings?", ["Linear search", "Trie-based insertion", "Bubble Sort", "Binary Search"], 1],
   ["What is the worst-case time complexity of generating substrings by extending from every starting position and inserting them into a Trie?", ["O(N)", "O(N log N)", "O(N²)", "O(N³)"], 2],
   ["Why can a HashSet-based solution require more memory than a Trie-based solution for this problem?", ["HashSet cannot store strings", "HashSet may store complete substring copies, causing repeated character storage", "Trie stores every substring as a separate string", "HashSet always uses constant memory"], 1],
   ["Given P = \"aaa\", with weight of a equal to 1 and K = 2, how many distinct valid non-empty substrings exist?", ["1", "2", "3", "4"], 1],
   ["In a Trie-based solution, what does a newly created Trie node represent when inserting substrings?", ["A new distinct substring prefix", "A duplicate substring", "The total weight of the original string", "The number of starting positions"], 0],
   ["Suppose P = \"abc\" and the character weights are a = 0, b = 0, c = 2, with K = 1. How many distinct non-empty substrings are valid?", ["2", "3", "4", "5"], 1],
   ["What is the main disadvantage of repeatedly calculating the weight of every generated substring from scratch?", ["It produces incorrect character weights", "It can increase the time complexity due to repeated calculations", "It removes duplicate substrings automatically", "It requires no additional memory"], 1],
   ["A string has length N and all possible substrings are generated and stored as complete strings in a HashSet. What can be the worst-case total character storage required?", ["O(N)", "O(N log N)", "O(N²)", "O(N³)"], 3]
  ]
 },
 {
  "n": "Move Hyphen to Beginning",
  "q": [
   ["Given the string \"Move-Hyphen-To-Beginning\", what will be the output after moving all hyphens to the beginning while maintaining the relative order of other characters?", ["---MoveHyphenToBeginning", "MoveHyphenToBeginning-", "--MoveHyphenToBeginning", "Move-HyphenToBeginning"], 0, "The input has 3 hyphens, so the output starts with three; the PDF's option A showed only one and was corrected."],
   ["Which approach provides an efficient solution for moving all hyphens to the beginning of a string while preserving the order of other characters?", ["Sort all characters", "Count hyphens and append non-hyphen characters", "Reverse the complete string", "Use nested loops to swap every character"], 1],
   ["What should be the output when the input string contains no hyphens, such as \"programming\"?", ["-programming", "programming-", "Empty string", "programming"], 3],
   ["Given the input \"---Java\", what will be the output after moving all hyphens to the beginning?", ["Java---", "---Java", "--Java-", "Java"], 1],
   ["What is the output when the input is \"A-B--C\" and all hyphens must be moved to the beginning?", ["---ABC", "ABC--", "-A-BC", "--A-BC"], 0, "The input has 3 hyphens, so the output starts with three; the PDF's option A showed only two and was corrected."],
   ["An algorithm first counts the number of hyphens and then copies all non-hyphen characters into a new character array. What is its overall time complexity?", ["O(N²)", "O(N log N)", "O(N)", "O(1)"], 2],
   ["If the input consists entirely of hyphens, such as \"-----\", what should the output be?", ["Empty string", "-----", "-", "----- followed by null"], 1],
   ["Which operation is required to preserve the original relative order of non-hyphen characters?", ["Sort the remaining characters", "Reverse the remaining characters", "Append characters in their original scanning order", "Swap adjacent non-hyphen characters"], 2],
   ["Given \"ab-cd-ef\", what is the correct output after moving hyphens to the beginning?", ["abcdef--", "--abcdef", "-ab-cdef", "--ab-cdef"], 1],
   ["What is the auxiliary space complexity of a solution that constructs a separate output string using a StringBuilder?", ["O(1)", "O(log N)", "O(N)", "O(N²)"], 2],
   ["Which input represents the edge case where the algorithm must return the original string without modification?", ["\"---\"", "\"A-B\"", "\"HELLO\"", "\"--A\""], 2],
   ["A developer uses repeated string concatenation inside a loop to move hyphens. Why can this approach become inefficient in Java?", ["Strings are mutable", "Each concatenation may create a new String object and copy existing characters", "String concatenation always takes O(1)", "Hyphens cannot be concatenated"], 1],
   ["Given \"x-y-z-\", how many characters will be present before the first non-hyphen character in the final output?", ["1", "2", "3", "4"], 2],
   ["Which condition correctly identifies a hyphen character in a Java string while scanning it character by character?", ["ch == '-'", "ch == '_'", "ch == ' '", "ch == '/'"], 0],
   ["If an input string has length N and contains K hyphens, how many non-hyphen characters will appear after the hyphens in the output?", ["K", "N", "N−K", "N+K"], 2],
   ["Which technique can move hyphens to the beginning in place using a character array and two-pointer traversal?", ["Use two pointers to place non-hyphen characters from the end", "Sort the character array", "Use binary search", "Apply merge sort"], 0],
   ["A string has 100 characters, including 25 hyphens. After moving all hyphens to the beginning, how many characters remain after the hyphen section?", ["25", "50", "75", "100"], 2]
  ]
 },
 {
  "n": "Manacher’s Algorithm",
  "q": [
   ["Consider the input string \"abba\". What is the length of its longest palindromic substring?", ["2", "3", "4", "5"], 2],
   ["What is the purpose of maintaining the current center C and right boundary R in Manacher’s Algorithm?", ["To track the current palindrome with the rightmost boundary", "To count distinct characters", "To sort the transformed string", "To find the smallest character"], 0],
   ["If a position i lies inside the current right boundary R, which position is used to initialize its palindrome radius using symmetry?", ["R + i", "2*C - i", "i - C", "C + R"], 1],
   ["Given the string \"babad\", what is the length of the longest palindromic substring?", ["2", "3", "4", "5"], 1],
   ["Which of the following strings has an even-length longest palindromic substring?", ["\"abc\"", "\"racecar\"", "\"cbbd\"", "\"xyz\""], 2],
   ["Why does Manacher’s Algorithm achieve O(N) time complexity despite expanding palindromes around multiple centers?", ["Every character is processed exactly once", "The right boundary of the known palindrome only moves forward, limiting repeated expansion", "It uses binary search for every character", "It ignores even-length palindromes"], 1],
   ["What is the time complexity of the straightforward center-expansion approach for finding the longest palindromic substring in the worst case?", ["O(N)", "O(N log N)", "O(N²)", "O(log N)"], 2],
   ["What is the output length of the longest palindromic substring for the input \"aaaaa\"?", ["1", "2", "4", "5"], 3],
   ["If the input string contains only one character, what is the length of its longest palindromic substring?", ["0", "1", "2", "Depends on the character"], 1],
   ["Which statement correctly describes a palindrome?", ["A string containing only unique characters", "A string that reads the same forward and backward", "A string sorted in ascending order", "A string containing only vowels"], 1],
   ["In the transformed string #a#b#b#a#, what is the palindrome centered at the middle separator?", ["#a#", "#b#", "#a#b#b#a#", "#b#b#"], 2],
   ["What is the auxiliary space complexity of the standard Manacher’s Algorithm implementation using a transformed string and radius array?", ["O(1)", "O(log N)", "O(N)", "O(N²)"], 2],
   ["Which of the following is a valid longest palindromic substring of \"forgeeksskeegfor\"?", ["\"geeksskeeg\"", "\"forgeek\"", "\"sskeegfor\"", "\"geekss\""], 0],
   ["What is the main advantage of Manacher’s Algorithm over checking every possible substring for palindromicity?", ["It requires no input string", "It reduces worst-case time complexity from O(N³) for brute-force checking to O(N)", "It sorts the string automatically", "It uses no auxiliary space"], 1],
   ["If two longest palindromic substrings have the same maximum length, what does the algorithm generally need to do to return a valid answer?", ["Return either one of the longest palindromes", "Return an empty string", "Return the entire input string", "Return the shortest palindrome"], 0]
  ]
 },
 {
  "n": "Sorted Unique Permutation",
  "q": [
   ["What is the main objective of generating sorted unique permutations of a string?", ["Generate all permutations in random order", "Generate all distinct permutations in lexicographical order", "Generate only palindromic permutations", "Sort the input without changing its characters"], 1],
   ["How many distinct permutations can be formed from the string \"ABC\"?", ["3", "4", "6", "9"], 2],
   ["Before generating permutations in lexicographical order, why is the input string commonly sorted?", ["To remove all repeated characters", "To establish the initial lexicographical order", "To reduce the number of characters", "To reverse the string"], 1],
   ["Given the string \"ABC\", which permutation appears first in lexicographical order?", ["BAC", "ACB", "ABC", "CBA"], 2],
   ["Given the string \"ABC\", which permutation appears last in lexicographical order?", ["ABC", "BCA", "CAB", "CBA"], 3],
   ["How many distinct permutations can be generated from \"AABC\"?", ["6", "8", "12", "24"], 2],
   ["Which condition helps prevent duplicate permutations when the input characters are sorted before backtracking?", ["Skip a character if it equals the previous character and the previous character has not been used in the current recursion path", "Skip every even-indexed character", "Always choose the largest character first", "Reverse the input at every recursive call"], 0],
   ["What is the number of distinct permutations of the string \"AAA\"?", ["1", "3", "6", "9"], 0],
   ["What is the time complexity of generating all distinct permutations when there are D distinct permutations and each result contains N characters?", ["O(N)", "O(N log N)", "O(D × N)", "O(N²)"], 2],
   ["What is the number of distinct permutations of the string \"AABB\"?", ["4", "6", "12", "24"], 1],
   ["Which data structure is commonly used to track whether a character has already been selected during permutation backtracking?", ["Boolean visited array", "Queue", "PriorityQueue", "Graph adjacency list"], 0],
   ["Given the string \"AB\", what is the second permutation in lexicographical order?", ["AB", "BA", "AA", "BB"], 1],
   ["What is the main reason for sorting characters before applying the next-permutation technique?", ["To ensure generated permutations follow lexicographical order", "To remove duplicate characters", "To reduce recursion depth", "To make all characters identical"], 0],
   ["Which Java method can be used to sort a character array before generating permutations?", ["Arrays.sort(charArray)", "Collections.reverse (charArray)", "String.sort()", "Scanner.sort()"], 0],
   ["If a string contains N distinct characters, how many total permutations can be generated?", ["N²", "2ᴺ", "N!", "N log N"], 2],
   ["What is the next lexicographical permutation of \"123\"?", ["132", "213", "231", "321"], 0],
   ["Which approach is more suitable when all unique permutations must be generated and printed in lexicographical order?", ["Generate permutations randomly and sort them afterward", "Sort the input and use backtracking with duplicate skipping", "Reverse the input repeatedly", "Use only a HashMap of character frequencies"], 1],
   ["A string contains 5 characters, where two characters are identical and the remaining three are distinct. How many distinct permutations can be generated?", ["30", "60", "120", "24"], 1]
  ]
 },
 {
  "n": "Maneuvering (Grid Paths)",
  "q": [
   ["A person moves from the top-left corner to the bottom-right corner of a grid. They can move only right or down. Which mathematical concept is commonly used to calculate the number of shortest paths?", ["Permutation", "Combination", "Probability", "Arithmetic progression"], 1],
   ["A robot moves from (0,0) to (2,3) using only right and down movements. How many shortest paths are possible?", ["5", "10", "15", "20"], 1],
   ["Why can the number of shortest paths in a rectangular grid be calculated using combinations?", ["Because all movements are identical", "Because the order of right and down moves determines the path", "Because only one direction is allowed", "Because movements are independent"], 1],
   ["A person must move 4 steps right and 3 steps down to reach a destination. How many different shortest paths are possible?", ["21", "28", "35", "42"], 2],
   ["A robot can move only right or down. One cell in its grid is blocked. Which approach is most suitable for calculating the number of valid paths when several cells may be blocked?", ["Binary search", "Dynamic programming", "Linear search", "Selection sort"], 1],
   ["A person moves from (0,0) to (3,3) using only right and up movements. The person must never move above the diagonal boundary represented by the condition that the number of up moves cannot exceed the number of right moves at any point. How many valid paths are possible?", ["4", "5", "6", "8"], 1],
   ["Which formula gives the number of shortest paths from (0,0) to (m,n) when only right and down movements are allowed?", ["(m+n)!", "(m+n)! / (m! × n!)", "m! / n!", "m × n"], 1],
   ["A robot travels from (0,0) to (3,3). It must pass through (1,1). Only right and down movements are allowed. How many paths are possible?", ["2", "12", "6", "8"], 1, "Paths (0,0)→(3,3) through (1,1): 2 × C(4,2) = 12. The PDF's options did not contain 12, so option B was corrected."],
   ["A grid has 3 rows and 3 columns of cells. A person starts at the top-left intersection and reaches the bottom-right intersection, moving only right or down. How many shortest paths are possible?", ["10", "15", "20", "30"], 2],
   ["In a grid path problem, what happens to the total number of paths when a blocked cell is introduced?", ["All paths become invalid", "Only paths passing through the blocked cell are removed", "The number of paths always doubles", "The number of paths remains unchanged"], 1],
   ["A robot must make 5 right moves and 2 down moves. If the first move must be right, how many shortest paths are possible?", ["10", "15", "21", "35"], 1],
   ["A person must make 3 right moves and 3 up moves. If no two up moves can occur consecutively, how many different movement sequences are possible?", ["2", "3", "4", "6"], 2],
   ["Which approach is generally used to solve grid path problems with obstacles efficiently?", ["Dynamic programming with a path-count table", "Sorting all possible paths", "Greedy selection of the longest path", "Binary search on grid positions"], 0],
   ["A robot travels from (0,0) to (4,3) using only right and down moves. How many shortest paths are possible?", ["21", "28", "35", "42"], 2],
   ["A person travels from (0,0) to (3,2) using right, down, and diagonal down-right moves. If exactly one diagonal move must be used, how many paths are possible?", ["6", "8", "10", "12"], 3],
   ["In a grid with only right and down movements, the number of paths to a cell is calculated by adding the number of paths from which neighboring cells?", ["Left and upper cells", "Right and lower cells", "Diagonal cells only", "All four neighboring cells"], 0],
   ["A robot moves from (0,0) to (4,4) using only right and down movements. How many shortest paths are possible if the final move must be down?", ["35", "56", "70", "126"], 0, "The PDF key lists B (56), but with the last move fixed as down, the path must first reach the cell just before it: C(7,3) = 35, so A is correct."],
   ["A person must move 4 steps right and 3 steps up. If the first two moves must be in different directions, how many movement sequences are possible?", ["20", "25", "30", "35"], 0, "The PDF key lists C (30), but the first two moves are RU or UR, each leaving 3 R and 2 U: 2 × C(5,2) = 20, so A is correct."],
   ["A robot moves from (0,0) to (4,4) using only right and down moves. How many paths have exactly two right moves before the first down move?", ["10", "15", "20", "25"], 0]
  ]
 },
 {
  "n": "Combination",
  "q": [
   ["Which statement correctly distinguishes combination from permutation?", ["Combination considers order, but permutation does not", "Both always consider order", "Combination does not consider order, but permutation does", "Neither considers order"], 2],
   ["A team of 3 students must be selected from 8 students. How many different teams can be formed?", ["24", "48", "56", "64"], 2],
   ["Which formula is used to select r objects from n distinct objects when order does not matter?", ["nʳ", "n! / (n − r)!", "n! / (r! × (n − r)!)", "n! × r!"], 2],
   ["A committee of 4 members is selected from 10 people. How many different committees are possible?", ["120", "180", "210", "240"], 2],
   ["From 7 men and 5 women, a committee of 4 people must be formed with exactly 2 men and 2 women. How many committees are possible?", ["150", "200", "210", "250"], 2],
   ["A student must answer 5 questions out of 8 questions. If the order of answering does not matter, how many selections are possible?", ["40", "48", "56", "64"], 2],
   ["A group of 5 people is selected from 9 people. If one particular person must always be included, how many groups are possible?", ["56", "70", "84", "126"], 1],
   ["A committee of 3 people is selected from 6 men and 4 women. If at least one woman must be included, how many committees are possible?", ["80", "90", "100", "110"], 2],
   ["Which identity is correct for combinations?", ["nCr = nPr", "nCr = nC(n−r)", "nCr = rCn", "nCr = n!"], 1],
   ["A box contains 8 different books. In how many ways can 3 books be selected if two particular books cannot be selected together?", ["36", "50", "48", "56"], 1, "C(8,3) − C(6,1) = 56 − 6 = 50. The PDF's options did not contain 50, so option B was corrected."],
   ["From 10 people, a group of 4 is selected. Two particular people must not be included together. How many groups are possible?", ["168", "182", "196", "210"], 1],
   ["A student has 7 different books and must select 4. If two particular books must both be selected, how many selections are possible?", ["5", "10", "15", "20"], 1],
   ["A committee of 5 people is formed from 8 men and 7 women. If exactly 3 men must be selected, how many committees are possible?", ["840", "980", "1176", "1400"], 2],
   ["How many diagonals can be drawn in a polygon with 12 vertices by joining pairs of non-adjacent vertices?", ["48", "50", "54", "60"], 2],
   ["A group of 6 people is selected from 10 people. If two particular people must both be included, how many groups are possible?", ["56", "70", "84", "112"], 1],
   ["From 9 different fruits, a person selects 4 fruits. If at least one of two particular fruits must be selected, how many selections are possible?", ["70", "84", "91", "98"], 2],
   ["A class has 6 boys and 5 girls. A team of 4 students must be selected with at least 2 boys. How many teams are possible?", ["180", "200", "265", "225"], 2, "150 (2B+2G) + 100 (3B+1G) + 15 (4B) = 265. The PDF's options did not contain 265, so option C was corrected."],
   ["In how many ways can 5 cards be selected from a standard deck of 52 cards when the order of selection does not matter?", ["2,598,960", "2,500,000", "1,000,000", "3,000,000"], 0],
   ["A committee of 3 is selected from 8 people. If two particular people cannot be selected together, how many committees are possible?", ["46", "48", "50", "52"], 2, "The PDF key lists B (48), but C(8,3) − C(6,1) = 56 − 6 = 50, so C is correct."],
   ["From 6 men and 5 women, a team of 5 people is selected. If the team must contain more women than men, how many teams are possible?", ["126", "181", "136", "141"], 1, "150 (3W+2M) + 30 (4W+1M) + 1 (5W) = 181. The PDF's options did not contain 181, so option B was corrected."]
  ]
 },
 {
  "n": "Josephus Trap",
  "q": [
   ["The Josephus problem involves people standing in a circle and eliminating every Kth person until only one remains. What determines the elimination order?", ["Total number of people only", "Elimination interval K and starting position", "Direction of the circle only", "Number of rounds only"], 1],
   ["There are 5 people standing in a circle, numbered 1 to 5. Starting at position 1, every second person is eliminated. Counting resumes from the next person. Which position survives?", ["1", "2", "3", "4"], 2],
   ["In the Josephus problem, what does the recurrence J(n) = (J(n−1) + K) mod n calculate when positions are zero-indexed?", ["Number of eliminations", "Survivor’s position", "Number of rounds", "Starting position"], 1],
   ["In a circle of 7 people, every second person is eliminated, starting the count at position 1. Which position survives?", ["3", "5", "7", "1"], 2],
   ["Why is the Josephus problem considered a circular elimination problem?", ["Because people are arranged in a straight line", "Because counting resumes from the next person in a circle", "Because all people are eliminated simultaneously", "Because the first person always survives"], 1],
   ["There are 10 people standing in a circle. Every second person is eliminated until only one remains. Which position survives?", ["3", "5", "7", "9"], 1],
   ["Which data structure is conceptually suitable for directly simulating the Josephus elimination process?", ["Stack", "Queue", "Circular linked list", "Binary search tree"], 2],
   ["In a circle of 8 people, every third person is eliminated. Counting starts at position 1, and counting resumes from the next person. Which position survives?", ["1", "4", "7", "8"], 2],
   ["For K = 2, which formula gives the survivor’s 1-based position when N is a power of 2 or any positive integer?", ["2N + 1", "2L + 1, where L = N − 2^⌊log₂N⌋", "N / 2", "N − 1"], 1],
   ["There are 6 people in a circle. Every third person is eliminated, starting the count at position 1. Which position survives?", ["1", "2", "4", "5"], 0],
   ["What is the time complexity of simulating the Josephus problem using a simple array where each elimination requires shifting the remaining elements?", ["O(1)", "O(log N)", "O(N)", "O(N²)"], 3],
   ["There are 12 people standing in a circle. Every second person is eliminated. Which position survives?", ["7", "9", "10", "12"], 1],
   ["In the Josephus recurrence, why is the result calculated using modulo n?", ["To sort the positions", "To keep the survivor’s position within the valid range", "To eliminate all even positions", "To calculate the number of people"], 1],
   ["A circle contains 10 people. Every third person is eliminated, starting at position 1. Counting resumes from the next person after each elimination. Which position survives?", ["2", "3", "4", "5"], 2],
   ["There are 16 people standing in a circle. Every second person is eliminated until only one remains. Which position survives?", ["1", "5", "9", "13"], 0],
   ["In a circle of 11 people, every second person is eliminated, starting from position 1. Which position survives?", ["5", "7", "9", "11"], 1],
   ["If the elimination interval K is equal to 1, which person survives in a circle of N people when counting begins at position 1?", ["First person", "Second person", "Last person", "Middle person"], 2],
   ["There are 9 people in a circle. Every fourth person is eliminated, starting at position 1. Counting resumes from the next person. Which position survives?", ["1", "2", "6", "8"], 0],
   ["In the Josephus problem, if N = 13 and K = 2, which position survives?", ["7", "9", "11", "13"], 2]
  ]
 },
 {
  "n": "Maze Solving",
  "q": [
   ["In a maze-solving problem, a cell can be visited only if it is inside the maze, is not blocked, and has not already been visited in the current path. Which condition prevents the algorithm from moving into an invalid cell?", ["Checking only the destination", "Checking boundaries, obstacles, and visited status", "Checking only the row number", "Checking only the column number"], 1],
   ["A maze is represented by an N × N matrix containing 1 for open cells and 0 for blocked cells. What does the value 1 represent?", ["A wall", "An invalid position", "A traversable cell", "The destination only"], 2],
   ["Why is backtracking useful in maze solving?", ["It permanently removes every visited cell", "It explores alternatives when the current path cannot reach the destination", "It always selects the shortest path", "It avoids checking obstacles"], 1],
   ["A robot can move only right or down in a completely open 2 × 2 grid of cells, starting at the top-left cell and ending at the bottom-right cell. How many different paths are possible?", ["1", "2", "3", "4"], 1],
   ["In a maze represented by an N × N matrix, what is the maximum number of cells that may need to be visited during a single DFS traversal?", ["N", "2N", "N²", "2N²"], 2],
   ["Which approach is generally suitable when the objective is to find the shortest path in an unweighted maze?", ["DFS", "BFS", "Insertion Sort", "Binary Search"], 1],
   ["A maze has a start cell and a destination cell, but every possible route to the destination is blocked. What should a correct maze-solving algorithm report?", ["Start cell is the destination", "Infinite paths", "No valid path exists", "Every blocked cell is reachable"], 2],
   ["A maze has 5 rows and 5 columns. If every cell is open, how many cells are present in the maze?", ["10", "20", "25", "30"], 2],
   ["Which statement about DFS-based maze solving is correct?", ["It always finds the shortest path", "It explores one path deeply before trying alternatives", "It never needs a visited array", "It can move only horizontally"], 1],
   ["What is the worst-case time complexity of exploring every cell of an N × N maze using DFS with a visited array?", ["O(N)", "O(N log N)", "O(N²)", "O(N⁴)"], 2],
   ["A maze-solving algorithm finds one valid path and immediately stops. Can it guarantee that the path is the shortest?", ["Yes, always", "No, not unless the search strategy guarantees shortest-path discovery", "Yes, if DFS is used", "Yes, if recursion is used"], 1],
   ["In a recursive maze algorithm, what is the purpose of undoing a visited mark when backtracking?", ["To permanently block the cell", "To allow the cell to be considered in another candidate path", "To increase the maze size", "To remove the destination"], 1],
   ["A maze contains 4 rows and 6 columns. What is the maximum number of distinct cells that can be explored?", ["10", "20", "24", "30"], 2],
   ["Which condition should be checked before moving from the current cell to a neighboring cell in a maze?", ["The neighbor must be open, within bounds, and unvisited", "The neighbor must be in the first row", "The neighbor must be the destination", "The neighbor must have the same coordinates"], 0],
   ["A maze has multiple possible paths from the start to the destination. Which modification is required if the goal is to find all valid paths rather than just one?", ["Stop after finding the first path", "Continue exploring alternatives and backtrack after recording each valid path", "Use binary search", "Ignore visited cells permanently"], 1]
  ]
 },
 {
  "n": "N Queens",
  "q": [
   ["The N Queens problem requires placing N queens on an N × N chessboard so that no two queens attack each other. Which condition must be satisfied?", ["No two queens share a row, column, or diagonal", "No two queens share a row only", "No two queens share a column only", "All queens must be on black squares"], 0],
   ["Why is it sufficient to place exactly one queen in each row while solving the standard N Queens problem?", ["Queens cannot move diagonally", "Any valid solution must have exactly one queen in every row", "Queens cannot attack horizontally only", "Every row has a fixed queen position"], 1],
   ["What is the result of the N Queens problem for N = 2?", ["One solution", "Two solutions", "No valid solution", "Four solutions"], 2],
   ["What is the result of the N Queens problem for N = 3?", ["One solution", "Two solutions", "Four solutions", "No valid solution"], 3],
   ["When placing a queen in a particular column, which previously placed queens must be checked for conflicts?", ["Only queens in the same row", "Queens in the same column and both diagonals", "Only queens in adjacent rows", "Every queen on the board must be checked in all directions"], 1],
   ["A queen is placed at position (row, column). Which mathematical condition identifies another position on the same diagonal?", ["Same row or same column", "Equal row difference and column difference in absolute value", "Equal row and column values only", "Product of row and column is equal"], 1],
   ["What should a backtracking algorithm do when no safe column is available for the queen in the current row?", ["Place the queen in an unsafe position", "Return to the previous row and try another column", "Stop without exploring alternatives", "Increase the board size"], 1],
   ["How many queens must be placed on a standard 8 × 8 chessboard to solve the 8 Queens problem?", ["4", "6", "8", "16"], 2],
   ["Which representation is commonly used to simplify the N Queens problem by storing the column position of the queen in each row?", ["One-dimensional array", "Linked list only", "Stack of strings", "Binary tree"], 0],
   ["In a common backtracking implementation that places one queen per row, how many candidate columns may be checked at each row before safety filtering?", ["1", "N", "N²", "2N²"], 1],
   ["Which of the following is a necessary property of every valid N Queens arrangement?", ["Every column contains exactly one queen", "Every diagonal contains exactly one queen", "All queens must occupy the same color squares", "Queens must be placed in consecutive columns"], 0],
   ["What is the worst-case search space when a simple backtracking algorithm tries to place one queen per row by considering N columns in each row?", ["O(N)", "O(N²)", "O(N!)", "O(2N)"], 2],
   ["Why is checking only the previous rows sufficient when queens are placed row by row from top to bottom?", ["Future rows are already occupied", "Only previously placed queens can conflict with the newly placed queen", "Diagonal attacks do not matter", "Queens cannot attack downward"], 1],
   ["In the N Queens problem, what is the purpose of a safety-checking function?", ["To count the number of rows", "To verify that a new queen does not attack any previously placed queen", "To sort the queen positions", "To find the shortest diagonal"], 1],
   ["How many valid solutions exist for the 1 Queens problem?", ["0", "1", "2", "4"], 1],
   ["If a solution is found for N Queens and the algorithm is required to print every valid arrangement, what should it do after recording a solution?", ["Terminate immediately", "Continue backtracking to search for other arrangements", "Remove the chessboard", "Skip all remaining rows permanently"], 1],
   ["Which optimization can improve the performance of N Queens backtracking by avoiding repeated diagonal scans?", ["Maintain sets or arrays for occupied columns and diagonals", "Sort the chessboard after every move", "Use linear search over all board cells", "Remove all previously placed queens"], 0],
   ["In the N Queens problem, how many diagonals can potentially be indexed using row - column + N - 1 for an N × N board?", ["N", "2N - 1", "N²", "2N"], 1]
  ]
 },
 {
  "n": "Warnsdorff’s Algorithm",
  "q": [
   ["What is the objective of the Knight’s Tour problem?", ["Visit every square exactly once using a knight’s legal moves", "Place one knight in every row", "Capture all opposing pieces", "Reach a corner in the minimum number of moves"], 0],
   ["Why does Warnsdorff’s Algorithm prefer a square with fewer onward moves?", ["To visit difficult-to-reach squares before they become inaccessible", "To maximize the number of repeated visits", "To avoid using knight moves", "To move toward the center only"], 0],
   ["On a standard 8 × 8 chessboard, how many squares must a complete Knight’s Tour visit?", ["8", "32", "64", "128"], 2],
   ["What does the degree of a square represent in Warnsdorff’s Algorithm?", ["Number of times the square has been visited", "Number of currently available unvisited squares reachable by a knight from that square", "Distance from the center", "Number of rows and columns"], 1],
   ["A knight has three possible unvisited next squares. Their onward degrees are 2, 4, and 1. Which square should be selected according to Warnsdorff’s rule?", ["Degree 2", "Degree 4", "Degree 1", "Any square"], 2],
   ["Which type of algorithmic strategy does Warnsdorff’s Algorithm primarily use?", ["Greedy", "Divide and Conquer", "Binary Search", "Dynamic Programming"], 0],
   ["What should an implementation do if two candidate squares have the same minimum onward degree?", ["Always stop", "Apply a tie-breaking rule, such as choosing one candidate consistently or trying alternatives", "Visit both squares simultaneously", "Ignore both squares"], 1],
   ["Why is Warnsdorff’s Algorithm considered a heuristic rather than a guaranteed solution method in every implementation?", ["It always visits squares randomly", "A locally best move does not necessarily guarantee a complete tour", "It does not use chess moves", "It only works on rectangular boards"], 1],
   ["Which condition must be checked before considering a knight’s next move on a chessboard?", ["The destination square must be within bounds and unvisited", "The destination must be on the same row", "The destination must be a corner", "The destination must have a higher row number"], 0],
   ["A knight is standing at a corner of an empty 8 × 8 chessboard. How many legal moves are available from that corner?", ["2", "3", "4", "6"], 0],
   ["What is the purpose of marking a square as visited after the knight moves onto it?", ["To allow the knight to visit it again", "To prevent the knight from visiting the same square more than once", "To increase its onward degree", "To change the board size"], 1],
   ["Which approach can be used when the greedy choices made by Warnsdorff’s Algorithm lead to a dead end?", ["Backtrack and try another candidate move", "Restart the board with fewer squares", "Ignore the dead end", "Visit an already visited square"], 0],
   ["In a Knight’s Tour, how many moves are required to visit all 64 squares exactly once in an open tour?", ["62", "63", "64", "65"], 1],
   ["What is the difference between an open Knight’s Tour and a closed Knight’s Tour?", ["An open tour visits only half the board", "A closed tour ends on a square from which the knight can legally return to its starting square", "An open tour allows repeated squares", "A closed tour does not visit every square"], 1],
   ["If a knight has no unvisited legal moves before visiting all board squares, what does this indicate?", ["A complete tour is found", "The current path has reached a dead end", "The knight has moved legally to every square", "The board is automatically closed"], 1],
   ["Which information is needed to calculate the onward degree of a candidate square?", ["Number of occupied rows", "Number of legal, unvisited knight moves from that square", "Total number of chess pieces", "Distance from the starting square"], 1],
   ["What is the main advantage of Warnsdorff’s heuristic compared with blindly exploring every possible knight move?", ["It reduces unnecessary exploration by choosing constrained squares first", "It guarantees the shortest tour", "It eliminates the need to track visited squares", "It allows illegal moves"], 0]
  ]
 },
 {
  "n": "Hamiltonian Cycle",
  "q": [
   ["Which statement correctly distinguishes a Hamiltonian Cycle from an Eulerian Cycle?", ["Hamiltonian Cycle visits every edge exactly once; Eulerian visits every vertex", "Hamiltonian Cycle visits every vertex exactly once; Eulerian Cycle uses every edge exactly once", "Both require every edge to be visited exactly once", "Both require every vertex to be visited multiple times"], 1],
   ["In a Hamiltonian Cycle, how many times can each vertex appear in the cycle, excluding the repeated starting vertex at the end?", ["Zero times", "Exactly once", "Exactly twice", "Any number of times"], 1],
   ["A graph contains 5 vertices. A Hamiltonian Cycle must visit all vertices and return to the starting vertex. How many edges are included in the cycle?", ["4", "5", "6", "10"], 1],
   ["Which of the following is a necessary condition for a graph to contain a Hamiltonian Cycle?", ["Every vertex must have degree at least 2", "Every vertex must have degree exactly 1", "The graph must contain no cycles", "Every vertex must be connected to only one other vertex"], 0],
   ["Why is a Hamiltonian Cycle problem considered computationally difficult for general graphs?", ["It can require exploring many possible vertex arrangements", "It always has a unique solution", "It can be solved by sorting vertices", "It requires only one comparison"], 0],
   ["A complete undirected graph contains 4 vertices. How many distinct Hamiltonian Cycles exist if rotations and reverse directions are considered equivalent?", ["1", "2", "3", "6"], 2, "The PDF key lists B (2), but (4−1)!/2 = 3 distinct cycles, so C is correct."],
   ["In a backtracking solution for the Hamiltonian Cycle problem, what should be checked before adding a candidate vertex to the current path?", ["It must be adjacent to the previous vertex and not already present in the path", "It must have the largest label", "It must be the starting vertex", "It must have the highest degree"], 0],
   ["If a Hamiltonian Cycle has been constructed for a graph, what must be checked before declaring success?", ["The last vertex must be connected to the starting vertex", "The last vertex must have the highest degree", "Every edge must be used", "The path must contain repeated vertices"], 0],
   ["Which graph is guaranteed to contain a Hamiltonian Cycle when it has at least 3 vertices?", ["A complete graph", "A disconnected graph", "A graph with no edges", "A tree with more than one vertex"], 0],
   ["A tree contains more than two vertices. Can it contain a Hamiltonian Cycle?", ["Yes, always", "No, because a tree contains no cycles", "Only if it is complete", "Only if every vertex has degree 2"], 1],
   ["What is the worst-case time complexity of a straightforward backtracking algorithm for the Hamiltonian Cycle problem?", ["O(N)", "O(N log N)", "O(N!)", "O(log N)"], 2],
   ["A graph has 6 vertices. A Hamiltonian Cycle must visit each vertex once before returning to the starting vertex. How many distinct vertex positions are there in the cycle, excluding the repeated starting vertex?", ["5", "6", "7", "12"], 1],
   ["Which statement about a Hamiltonian Path is correct?", ["It visits every vertex exactly once but does not necessarily return to the starting vertex", "It visits every edge exactly once", "It must always be a cycle", "It can visit only half the vertices"], 0],
   ["A connected graph has a vertex with degree 1. Can the graph contain a Hamiltonian Cycle?", ["Yes, always", "No, because every vertex in a Hamiltonian Cycle needs two incident cycle edges", "Only if the graph has an even number of vertices", "Only if it is a complete graph"], 1],
   ["In a Hamiltonian Cycle backtracking algorithm, why is the starting vertex usually fixed before constructing the remaining path?", ["To avoid considering equivalent cycles that differ only by rotation", "To ensure the graph is complete", "To eliminate all edges", "To guarantee a shortest cycle"], 0],
   ["What should a backtracking algorithm do if no unvisited adjacent vertex can be added to the current Hamiltonian path?", ["Accept the incomplete path", "Backtrack and try a different previous choice", "Repeat the same vertex", "Stop checking all other possibilities"], 1],
   ["Which of the following statements is true for a Hamiltonian Cycle in an undirected graph?", ["Every vertex has exactly two incident edges belonging to the cycle", "Every vertex must have degree exactly two in the entire graph", "Every edge must belong to the cycle", "The graph must be bipartite"], 0],
   ["A graph has 5 vertices. A path visits vertices A, B, C, D, and E exactly once. What additional condition is required for this path to become a Hamiltonian Cycle?", ["A and E must be connected by an edge", "A and C must be connected by an edge", "B and D must be connected by an edge", "C and E must be connected by an edge"], 0]
  ]
 }
];
