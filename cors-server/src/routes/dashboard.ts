import { Router } from 'express';
import * as Transaction from '../controller/Transaction';

const router = Router();

// HTTP Methods

// Post Book
router.post('/', Transaction.createBook);

// Get Book
router.get('/', Transaction.getAllBook);

// Put Book
router.put('/:id', Transaction.updateBook);

// Delete Book
router.delete('/:id', Transaction.deleteBook);

export default router;
