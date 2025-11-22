
export let members = [
    {
        id: 1,
        name: "John Doe",
        borrowedBooks: [
            { bookId: 101, borrowedAt: "2025-11-21T10:00:00Z" }
        ]
    },
    {
        id: 2,
        name: "Ali Khan",
        borrowedBooks: [
            { bookId: 102, borrowedAt: "2025-11-21T10:00:00Z" }
        ]
    },
    {
        id: 3,
        name: "Usman Tariq",
        borrowedBooks: [
            { bookId: 103, borrowedAt: "2025-11-21T10:00:00Z" }
        ]
    },
    {
        id: 4,
        name: "Hammad Ali",
        borrowedBooks: [
            { bookId: 104, borrowedAt: "2025-11-21T10:00:00Z" }
        ]
    },
    {
        id: 5,
        name: "Sara Ahmed",
        borrowedBooks: [
            { bookId: 105, borrowedAt: "2025-11-21T10:00:00Z" }
        ]
    }
];






// Add a new member
export const addMember = (req, res) => {
    const newMember = {
        id: members.length + 1,
        name: req.body.name,
        borrowedBooks: req.body.borrowedBooks || []
    };

    members.push(newMember);
    res.status(200).json({ message: "Member added", data: newMember });
};



// Get all members
export const getAllMembers = (req, res) => {
    res.json(members);
};




// Get member by ID
export const getMemberById = (req, res) => {
    const member = members.find(m => m.id === parseInt(req.params.id));
    member
        ? res.json(member)
        : res.status(404).json({ message: "Member not found" });
};



// Update member
export const updateMember = (req, res) => {
    const member = members.find(m => m.id === parseInt(req.params.id));
    if (!member) return res.status(404).json({ message: "Member not found" });

    member.name = req.body.name ?? member.name;
    member.borrowedBooks = req.body.borrowedBooks ?? member.borrowedBooks;

    res.json({ message: "Member updated", data: member });
};



// Delete member
export const deleteMember = (req, res) => {
    members = members.filter(m => m.id !== parseInt(req.params.id));
    res.json({ message: "Member deleted" });
};
