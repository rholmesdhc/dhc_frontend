import fitz

doc = fitz.open('public/documents/Food pantries with locations.pdf')
for page_num in range(len(doc)):
    page = doc[page_num]
    
    annots = list(page.annots())
    if annots:
        print(f"Page {page_num+1} annots: {annots}")
        
    drawings = page.get_drawings()
    if drawings:
        for d in drawings:
            # Just print anything that has a color
            print(f"Page {page_num+1} drawing: type={d.get('type')}, color={d.get('color')}, fill={d.get('fill')}, rect={d.get('rect')}")
            
    images = page.get_images()
    if images:
        print(f"Page {page_num+1} images: {len(images)}")
