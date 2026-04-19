/**
 * Work Gallery Data
 * 
 * All images are loaded from Google Drive (no local storage).
 * To add new images:
 *   1. Upload to the shared Google Drive folder
 *   2. Get the file ID from the share link
 *   3. Add an entry below with the ID
 * 
 * Google Drive Folder: https://drive.google.com/drive/folders/1T-nByraty4W-sQh56rZUnVlnVHHjeraj
 */

// Helper to generate Drive thumbnail URL (faster & more reliable than uc?export)
const driveUrl = (id) => `https://lh3.googleusercontent.com/d/${id}=w800`;

// Fallback URL format if thumbnail doesn't work
// const driveUrl = (id) => `https://drive.google.com/uc?export=view&id=${id}`;

export const workCategories = [
  'All',
  'Floor Coating',
  'Pipe Coating',
  'Tank Coating',
  'Other Coating',
];

export const works = [
  // ── Floor Coating (Epoxy) ──────────────────────────
  {
    id: 'fc-1',
    title: 'Epoxy Floor Coating',
    category: 'Floor Coating',
    image: driveUrl('1YGIEHZ7oVzS4RNcePv1Z4BwHpC4nbpa0'),
  },
  {
    id: 'fc-2',
    title: 'Industrial Floor Coating',
    category: 'Floor Coating',
    image: driveUrl('1GZeW4TbXUnDYNIe2kiS2OUbpX1sWk0DP'),
  },
  {
    id: 'fc-3',
    title: 'Self-Leveling Floor Coating',
    category: 'Floor Coating',
    image: driveUrl('1lDXHltPuioKkvbtcBAM-Nn0bE2e6WWRC'),
  },
  {
    id: 'fc-4',
    title: 'Heavy-Duty Floor Coating',
    category: 'Floor Coating',
    image: driveUrl('1L2zItTxsbsjMfPZDnk1usCSdZxhhAKRl'),
  },
  {
    id: 'fc-5',
    title: 'Warehouse Epoxy Flooring',
    category: 'Floor Coating',
    image: driveUrl('15Ug5lJIFO1SVmMbweeRVxUaimKMlhZty'),
  },
  {
    id: 'fc-6',
    title: 'Factory Epoxy Flooring',
    category: 'Floor Coating',
    image: driveUrl('18la6qIlLeXUBExPvj4Ot8y193FQvVekk'),
  },
  {
    id: 'fc-7',
    title: 'Anti-Slip Epoxy Flooring',
    category: 'Floor Coating',
    image: driveUrl('1saC1x0Q2v2gKEAgJdk9lvkdk8b14UGLO'),
  },
  {
    id: 'fc-8',
    title: 'Chemical Resistant Flooring',
    category: 'Floor Coating',
    image: driveUrl('1oTp_i0RkkPzjtp5khkwE9PTzL2tZh4kH'),
  },
  {
    id: 'fc-9',
    title: 'Epoxy Floor System',
    category: 'Floor Coating',
    image: driveUrl('1-FkKIgFshrQKIuZdFmbwamAIsi0olIU2'),
  },
  {
    id: 'fc-10',
    title: 'High-Gloss Floor Coating',
    category: 'Floor Coating',
    image: driveUrl('139rvH9L5ysvW2dgH-0sJBoN8EBBTphY-'),
  },
  {
    id: 'fc-11',
    title: 'Seamless Epoxy Flooring',
    category: 'Floor Coating',
    image: driveUrl('1MlPRe5HX84uaySyIZ9WkMjVploUJILE5'),
  },

  // ── Pipe Coating ───────────────────────────────────
  {
    id: 'pc-1',
    title: 'Internal Pipe Coating',
    category: 'Pipe Coating',
    image: driveUrl('1xY3bbVHYIiaE7fvJ68zTnXmsSZOuwiiz'),
  },
  {
    id: 'pc-2',
    title: 'Pipeline Protection Coating',
    category: 'Pipe Coating',
    image: driveUrl('1q1xaOKYfEgMjgPfdYY0gbJFZT_yNRZPk'),
  },
  {
    id: 'pc-3',
    title: 'Anti-Corrosion Pipe Coating',
    category: 'Pipe Coating',
    image: driveUrl('1_gfv8Yli0zATCXN3tg9rlsQtehmlnXBY'),
  },
  {
    id: 'pc-4',
    title: 'Epoxy Pipe Lining',
    category: 'Pipe Coating',
    image: driveUrl('1Cyuu-Z0TezikrSQNATnPfF5BEx_g7Vki'),
  },
  {
    id: 'pc-5',
    title: 'Industrial Pipe Coating',
    category: 'Pipe Coating',
    image: driveUrl('1_CJS8bR8jawdg8rKOFD0as3LbTpeBZ0r'),
  },
  {
    id: 'pc-6',
    title: 'Water Pipeline Coating',
    category: 'Pipe Coating',
    image: driveUrl('15OKKA4iiC3DYFk8t7D5fCwoaE_2unGNY'),
  },
  {
    id: 'pc-7',
    title: 'Large Diameter Pipe Coating',
    category: 'Pipe Coating',
    image: driveUrl('1wo61TDstdHUuNU4_xk8Os_To_ElTHpQB'),
  },
  {
    id: 'pc-8',
    title: 'Fusion-Bonded Pipe Coating',
    category: 'Pipe Coating',
    image: driveUrl('17KNEOzDSaa0tfq7DCI58gU9vYqiydYjl'),
  },
  {
    id: 'pc-9',
    title: 'Pipeline Internal Lining',
    category: 'Pipe Coating',
    image: driveUrl('1Y4AV3CWPaK9ZMVeI4Kk1ROtJuWgkDAGM'),
  },

  // ── Tank Coating ───────────────────────────────────
  {
    id: 'tc-1',
    title: 'Storage Tank Coating',
    category: 'Tank Coating',
    image: driveUrl('1acsl-Y9Q4tWHPjML0ySTJgrgQLgKwVJ5'),
  },
  {
    id: 'tc-2',
    title: 'Chemical Tank Coating',
    category: 'Tank Coating',
    image: driveUrl('1swSPyKsqxEztbLfJ4nsAyz51i6WcizDH'),
  },

  // ── Other Coating ──────────────────────────────────
  {
    id: 'oc-1',
    title: 'Structural Steel Coating',
    category: 'Other Coating',
    image: driveUrl('18Q5vUUX1PlQZO5-rKBMT3UM5LH7Xfj89'),
  },
  {
    id: 'oc-2',
    title: 'Anti-Corrosion Coating',
    category: 'Other Coating',
    image: driveUrl('1qRgUO0s-NPf-J3HVmsr4ddY3GSjQROUx'),
  },
  {
    id: 'oc-3',
    title: 'Industrial Equipment Coating',
    category: 'Other Coating',
    image: driveUrl('1WX3sAnuPmXtDNHdVxHqrFMIYfabrOyiw'),
  },
  {
    id: 'oc-4',
    title: 'Surface Preparation & Coating',
    category: 'Other Coating',
    image: driveUrl('12UZVuWy8DW1gYYwrA2MN5pyMeKSZjH1j'),
  },
  {
    id: 'oc-5',
    title: 'Protective Coating Application',
    category: 'Other Coating',
    image: driveUrl('1GAMyV4b8d0J_ukGDM4yEu8Y23YSy-Vrq'),
  },
  {
    id: 'oc-6',
    title: 'Marine & Industrial Coating',
    category: 'Other Coating',
    image: driveUrl('1C52vUxuQT1x6OkF8PB-CzH95gyH_VskR'),
  },
];
