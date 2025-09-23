# Figma Investment Advisor Dashboard Integration

## Changes Made

The SDS repository has been configured to work with your Figma Investment Advisor Dashboard file:
- **File URL**: https://www.figma.com/make/mnVT7VDraBkErVAtOUAd8R/Investment-Advisor-Dashboard
- **File Key**: `mnVT7VDraBkErVAtOUAd8R`

### Updated Files

1. **figma.config.json** - Updated all component URL mappings to point to the new file
2. **scripts/icons/figma-plugin-icons-tsx/code.js** - Updated hardcoded file URL for icon generation
3. **.env** - Created with the new file key (you'll need to add your token)

## Next Steps to Complete Setup

### 1. Get a Figma API Token

1. Go to your [Figma Account Settings](https://www.figma.com/settings)
2. Navigate to "Personal access tokens"
3. Click "Create a new personal access token"
4. Give it a name like "SDS Code Connect"
5. Select the following scopes:
   - **Code Connect** (required for publishing component mappings)
   - **File Read** (required for reading design tokens)
   - **Dev Resources Write** (optional, for managing dev resources)
   - **Variables** (optional, for syncing design tokens)

### 2. Update Your .env File

Replace the placeholder in `.env` with your actual token:

```env
FIGMA_ACCESS_TOKEN=your_actual_figma_token_here
FIGMA_FILE_KEY=mnVT7VDraBkErVAtOUAd8R
```

### 3. Test the Connection

Once you have your token set up, you can test the connection:

```bash
# Test parsing (doesn't require token)
npm run npx figma connect parse --config figma.config.json

# Test publishing (requires valid token)
npx figma connect publish --config figma.config.json --dry-run
```

### 4. Sync Design Tokens (Optional)

If your Figma file has design tokens/variables you want to sync:

```bash
npm run script:tokens:rest
```

### 5. Sync Icons (Optional)

If your Figma file has icons you want to sync:

```bash
npm run script:icons:rest
```

## Important Notes

- The current configuration assumes your Figma file has the same component structure and node IDs as the original SDS community file
- If your Investment Advisor Dashboard file has different components or node IDs, you'll need to update the `documentUrlSubstitutions` in `figma.config.json`
- To find correct node IDs in your file, you can inspect component URLs in Figma (the `node-id` parameter in the URL)

## Troubleshooting

If you encounter issues:

1. **Authentication errors**: Verify your token has the correct scopes
2. **Node not found errors**: Check that the node IDs in figma.config.json match your file
3. **Build errors**: Run `npm run app:build` to verify the code still compiles

For more detailed information, see the [README.md](./README.md) file in this repository.