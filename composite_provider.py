from PIL import Image

def composite_provider(template_path, provider_path, output_path):
    print(f"Opening template: {template_path}")
    template = Image.open(template_path).convert("RGBA")
    
    print(f"Opening provider: {provider_path}")
    provider = Image.open(provider_path).convert("RGBA")
    
    # Calculate position to center provider in template (or just overlay at 0,0)
    # If the provider is already extracted with transparency and the original person's location,
    # then transparency might cover the whole frame.
    # We'll try to center it if sizes differ.
    
    tw, th = template.size
    pw, ph = provider.size
    
    x = (tw - pw) // 2
    y = (th - ph) // 2
    
    print(f"Compositing at position: ({x}, {y})")
    template.paste(provider, (x, y), provider)
    
    print(f"Saving combined image: {output_path}")
    template.save(output_path, "PNG")
    print("Success!")

if __name__ == "__main__":
    t_path = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\provider_proto_template.png"
    p_path = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\providers\Dr.Stevens2_transparent.png"
    o_path = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\providers\dr_stevens_template.png"
    composite_provider(t_path, p_path, o_path)
