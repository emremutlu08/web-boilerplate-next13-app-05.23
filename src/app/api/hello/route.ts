/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the "Hello, Next.js!"
 *     responses:
 *       200:
 *         description: hello world
 */

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

// /**
//  * @swagger
//  * /api/test:
//  *   post:
//  *     description: Returns the result of creation
//  *     tags: [Test]
//  *     summary: Create a new test
//  *     requestBody:
//  *      content:
//  *       application/json:
//  *        schema:
//  *         type: object
//  *         properties:
//  *          name:
//  *           type: string
//  *     consumes:
//  *      - application/json
//  *     produces:
//  *      - application/json
//  *     parameters:
//  *      - in: body
//  *        name: body
//  *        description: Test object that needs to be added.
//  *        schema:
//  *         type: object
//  *         properties:
//  *          name:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: hello world
//  */
